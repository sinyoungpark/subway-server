const express = require("express");
const cors = require("cors");


require("dotenv").config();
const { Sequelize, DataTypes, Model } = require("sequelize");

/*router */
const customerRouter = require("./routes/customerRouter");

const sequelize = new Sequelize(process.env.DATABASE, process.env.DATABASE_USER, process.env.PASSWORD, {
  host : 'localhost',
  dialect : 'mysql'
});

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

app.use("/customers", customerRouter);

app.listen(port, async () => {
  console.log(`server running at http://localhost:${port}/`);
  try{
    await sequelize.authenticate();
    console.log('successfullly.')
  } catch(error){
    console.error('failed',error);
  }
});
