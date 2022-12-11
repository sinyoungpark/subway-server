const express = require("express");
const db = require("../models");
const router = express.Router();
const isAuth = require("../isAuth");

require("dotenv").config();

/*게시글 작성*/
router.post("/", async (req, res) => {
  const { menuId, ingredientId, title } = req.body;

  try {
    const userId = isAuth(req);
    if (userId !== null) {
      const post = await db.Board.create({
        userId,
        menuId,
        title,
        count: 0,
      });

      /*Board-ingredients 테이블 안에 넣기

      1. board-ingredients안에 post.id와 ingredientsId 값을 넣는다. 
      */
      ingredientId.forEach(async (ingredient) => {
        await db.Board_Ingredient.create({
          boardId: post.id,
          ingredientId: ingredient,
        });
      });

      res.status(201).send({
        data: "저장되었습니다.",
      });
    }
  } catch (e) {
    res.status(401).send({
      error: `${e.message}`,
    });
  }
});

/*유저가 작성한 게시글들 get*/
router.get("/", async (req, res) => {
  try {
    const userId = isAuth(req);
    if (userId) {
      //board-menu
      const postsMenu = await db.Board.findAll({
        where: {
          userId,
        },
        attributes: ["id"],
        // include: [db.Menu, db.Ingredient],
        include: [
          {
            model: db.Menu,
            attributes: ["name", "img"],
          },
          {
            model: db.Ingredient,
            attributes: ["name", "img"],
          },
          {
            model: db.Like,
          },
        ],
      });

      res.status(200).send({
        data: postsMenu,
      });
    }
  } catch (e) {
    res.status(401).send({
      error: `${e.message}`,
    });
  }
});

/*게시글 수정 */
router.patch("/", async (req, res) => {
  try {
    const userId = isAuth(req);
    if (userId !== null) {
      const postId = req.query.postId;
      //좋아요 요청
      const post = await db.Board.findByPk(postId);
      if (postId) {
        const userLikes = await db.Like.findOne({
          where: {
            boardId: postId,
            userId,
          },
        });
        //좋아요 삭제
        if (userLikes) {
          await db.Like.destroy({
            where: {
              boardId: postId,
              userId,
            },
          });
          post.update({
            count: post.count - 1,
          });
        } else {
          //Likes에 추가
          await db.Like.create({
            boardId: postId,
            userId,
          });
          post.update({
            count: post.count + 1,
          });
        }
      }

      res.status(200).send({
        data: "성공적으로 수정 되었습니다.",
      });
    }
  } catch (e) {
    res.status(401).send({
      error: `${e.message}`,
    });
  }
});

/*게시글 삭제 */
router.delete("/", async (req, res) => {
  const { postId } = req.query;
  try {
    const userId = isAuth(req);
    if (userId !== null) {
      const post = await db.Board.destroy({
        where: { id: postId },
      });

      const likes = await db.Like.destroy({
        where: { boardId: postId },
      });

      res.status(200).send({
        message: "삭제되었습니다.",
      });
    }
  } catch (e) {
    res.status(401).send({
      error: `${e.message}`,
    });
  }
});

module.exports = router;
