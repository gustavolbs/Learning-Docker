const express = require("express");
const mysql = require("mysql2");
const app = express();
const port = 3000;

const config = {
  host: "db",
  user: "root",
  password: "root",
  database: "nodedb",
};

const connection = mysql.createConnection(config);

const sql = `INSERT INTO people(name) values('Gustavo Bispo')`;
connection.query(sql);
connection.end();

app.get("/", (req, res) => {
  res.send("<h1>My Node Image!</h1>");
});

app.listen(port, () => {
  console.log(`Rodando na porta ${port}`);
});
