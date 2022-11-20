const express = require("express");
const db = require("../models");
const bcrypt = require("bcrypt");
const router = express.Router();
const {
  createAccessToken,
  createRefreshToken,
  sendAccessToken,
  sendRefreshToken,
} = require("../token");
const { verify } = require("jsonwebtoken");

require("dotenv").config();

/*회원가입 요청 */
router.post("/signup", async (req, res) => {
  try {
    const { name, email, password, profileImg } = await req.body;

    const pwdHash = await bcrypt.hash(password, 10);

    const [user, created] = await db.User.findOrCreate({
      where: { email: email },
      defaults: {
        name: name,
        password: pwdHash,
        profileImg,
      },
    });

    if (!created) throw Error("user already exist");
    else {
      res.status(201).send({
        result: "회원가입을 축하드립니다.",
      });
    }
  } catch (e) {
    res.status(409).send({
      error: `${e.message}`,
    });
  }
});

/*로그인 요청 */
router.post("/login", async (req, res) => {
  try {
    const { email, password } = await req.body;

    const user = await db.User.findOne({
      where: {
        email,
      },
    });

    if (user === null) throw Error("가입되지 않은 사용자입니다.");

    const match = await bcrypt.compare(password, user.password);

    if (!match) throw Error("비밀번호를 잘못 입력하셨습니다.");
    else {
      //signing token with user id
      const accesstoken = createAccessToken(user.id);
      const refreshtoken = createRefreshToken(user.id);

      await db.User.update(
        { refreshtoken },
        {
          where: {
            id: user.id,
          },
        }
      );

      sendRefreshToken(res, refreshtoken);
      sendAccessToken( res, accesstoken, user);
    }
  } catch (e) {
    res.status(404).send({
      error: `${e.message}`,
    });
  }
});

/*로그아웃 */
router.post("/logout", async (req, res) => {
  res.clearCookie("refreshtoken", {
    path : "/customers/refresh_token"
  });
  res.status(200).send({
    result: "logged out",
  });
});

/*새로운 accesstoken 생성 */
router.post("/refresh_token", async (req, res) => {
  const token = req.cookies.refreshtoken;

  if (!token) return res.status(401).send({
      accesstoken: "",
    });

  let payload = null;
  try {
    payload = await verify(token, process.env.REFRESH_TOKEN_SECRET);
  } catch (e) {
    console.log(e);
    return res.status(401).send({
      accesstoken: "",
    });
  }

  const user = await db.User.findOne({
    where: {
      id: payload.userId,
    },
  });


  if (!user) return res.status(401).send({ accesstoken: "" });
  if (user.refreshtoken !== token) {
    return res.send({ accesstoken: "" });
  }

  const accesstoken = createAccessToken(user.id);
  const refreshtoken = createRefreshToken(user.id);

  await db.User.update(
    { refreshtoken },
    {
      where: {
        id: user.id,
      },
    }
  );

  sendRefreshToken(res, refreshtoken);
  sendAccessToken(res, accesstoken, user);
});

module.exports = router;
