
const http = require("http");
const { Sequelize, DataTypes, Model } = require("sequelize");

require("dotenv").config();

/*create a sequelize instance 
*/


const sequelize = new Sequelize(process.env.DATABASE, process.env.DATABASE_USER, process.env.PASSWORD, {
  host : 'localhost',
  dialect : 'mysql'
});

// const User = sequelize.define("User",{
//   firstname : {
//     type : DataTypes.STRING,
//     allowNull : false
//   },
//   lastName : {
//     type : DataTypes.STRING,
//     //allowNUll defaults to true
//   }
// },{
//   //other model options go here 
// });

class User extends Model {
  otherPublicField;
}

User.init({
  id : {
    type : DataTypes.INTEGER,

    autoIncrement : true,
    primaryKey : true
  }
}, { sequelize });

const user = new User({id:1});
user.id;

console.log(User === sequelize.models.User);

const hostname = '127.0.0.1';
const port = 5000;


const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("content-type", "text/plain");
  res.end("hello world");
});


server.listen(port, hostname, async () => {
  console.log(`server running at http://${hostname}:${port}/`);
  /*testing the connection */
  try{
    await sequelize.authenticate();
    console.log('successfullly.')
  } catch(error){
    console.error('failed',error);
  }
});

