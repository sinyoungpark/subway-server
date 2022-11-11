const jwt = require("jsonwebtoken");
require("dotenv").config();

const isAuth = (req) => {
  const authorization = req.get("authorization");

  if (!authorization) throw new Error("잘못된 접근입니다.");

  const token = authorization.split(" ")[1];
  const { userId } = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

  return userId;
};

module.exports = isAuth;
