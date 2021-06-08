const express = require("express");
const app = express();
const port = 3000;
const knex = require("knex")({
  client: "pg",
  connection:
    "postgres://rbmzjwch:op3itr0cmkeSWw_phcUhFLzFxOYMy2Az@batyr.db.elephantsql.com/rbmzjwch",
});

app.get("/", (req, res) => {});
app.get("/getImages", (req, res) => {
  knex
    .select()
    .table("images")
    .then((table) => {
      console.log(table);
      res.send({ status: "success", data: table });
    })
    .catch((err) => {
      res.send({ status: "fail", data: err });
    });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
