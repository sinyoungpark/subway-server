const express = require("express");
const cors = require("cors");

require("dotenv").config();
const { Sequelize, DataTypes, Model } = require("sequelize");
/*router */
const customerRouter = require("./routes/customerRouter");
const recipesRouter = require("./routes/recipesRouter");
const rankingRouter = require("./routes/rankingRouter");


const sequelize = new Sequelize(process.env.DATABASE, process.env.DATABASE_USER, process.env.PASSWORD, {
  host : 'localhost',
  dialect : 'mysql'
});

const app = express();

app.use(cors({
  origin : 'http://127.0.0.1:5500'
}));
app.use(express.json());


app.use("/customers", customerRouter);
app.use("/recipes", recipesRouter);
app.use("/rankings", rankingRouter);

app.listen(process.env.PORT, async () => {
  console.log(`server running at http://localhost:${process.env.PORT}/`);
  try{
    await sequelize.authenticate();
    console.log('successfullly.')
  } catch(error){
    console.error('failed',error);
  }
});
