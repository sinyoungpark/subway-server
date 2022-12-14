const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

require("dotenv").config();
const { Sequelize, DataTypes, Model } = require("sequelize");
/*router */
const customerRouter = require("./routes/customerRouter");
const recipesRouter = require("./routes/recipesRouter");
const adRouter = require('./routes/adRouter');
const rankingRouter = require("./routes/rankingRouter");
const menuRouter = require("./routes/menuRouter");


const sequelize = new Sequelize(process.env.DATABASE, process.env.DATABASE_USER, process.env.PASSWORD, {
  host : 'localhost',
  dialect : 'mysql'
});

const app = express();

app.use(cors({
  origin : ['http://my-subway-recipes.site', 'http://localhost:3000'],
  credentials : true,
}));
app.use(express.json());
app.use(cookieParser());

app.use("/customers", customerRouter);
app.use("/recipes", recipesRouter);
app.use("/ad", adRouter);
app.use("/rankings", rankingRouter);
app.use("/menu", menuRouter)

app.listen(process.env.PORT, async () => {
  console.log(`server running at http://localhost:${process.env.PORT}/`);
  try{
    await sequelize.authenticate();
    console.log('successfullly.')
  } catch(error){
    console.error('failed',error);
  }
});
