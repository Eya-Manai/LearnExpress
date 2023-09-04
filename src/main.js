import express from "express";
import "dotenv/config";
import "./config/db.js";
import routerTask from "./routes/task.js";
const app = express();

app.use(express.json());

app.use("/task", routerTask);

app.listen(process.env.PORT, () => {
  console.log("started the server at port " + process.env.PORT);
});
