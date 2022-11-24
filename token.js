const { sign } = require("jsonwebtoken");

const createAccessToken = userId => {
  return sign({userId}, process.env.ACCESS_TOKEN_SECRET,{
    expiresIn : "15m",
  });
}

const createRefreshToken = userId => {
  return sign({userId}, process.env.REFRESH_TOKEN_SECRET,{
    expiresIn : "7d",
  });
}

const sendAccessToken = (res,accesstoken, user) => {
  console.log(user);
  res.send({
    accesstoken,
    email : user.email,
    name : user.name
  });
}

const sendRefreshToken = (res, refreshtoken) => {
  console.log(refreshtoken);
  res.cookie("refreshtoken", refreshtoken, {
    httpOnly : true,
    path : "/customers/refresh_token",
    sameSite : "none",
    secure : true
  });
}

module.exports = {
  createAccessToken,
  createRefreshToken,
  sendAccessToken,
  sendRefreshToken
}