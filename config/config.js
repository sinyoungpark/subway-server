require("dotenv").config();

const env = process.env;

module.exports = {
  development : {
    "username": env.DATABASE_USER,
    "password": env.PASSWORD,
    "database": env.DATABASE,
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  test : {
    "username": env.DATABASE_USER,
    "password": env.PASSWORD,
    "database": env.DATABASE,
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  production : {
    "username": env.DATABASE_USER,
    "password": env.PASSWORD,
    "database": env.DATABASE,
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}