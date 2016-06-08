import * as MsSql from "mssql";
import { Repository } from "./repository";
import { Squirrel } from "./squirrel-model";

console.log("attempting SQL connection");

let connection = new MsSql.Connection({
  user: "dray",
  password: "squirrels",
  server: "localhost",
  port: 50729,
  database: "DrayTest",
  options: {
    encrypt: true
  }
});

let x = async (err: Error) => {
  if (err) {
    console.log("connection failed:", err);
  }
  else {
    console.log("connection successful");
  }

  let repo = new Repository(connection);

  console.log(await repo.getAll());

};

connection.connect(x);
