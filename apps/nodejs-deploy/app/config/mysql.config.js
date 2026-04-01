const mysql = require("mysql");
const path = require("path");
const { loadEnv } = require("@nodejs-doc/config");

loadEnv(path.resolve(__dirname, "../../"));

const database = mysql.createConnection({
    host : process.env.DB_HOST || "localhost",
    database : process.env.DB_NAME || "node_api",
    user : process.env.DB_USER || "root",
    password : process.env.DB_PASSWORD || ""
});
database.connect();
module.exports = database;