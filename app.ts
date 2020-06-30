import express from "express";
import bodyParser from "body-parser";
import path from "path";

import * as homeController from "./api/homeController";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  express.static(path.join(__dirname, "public"), { maxAge: 31557600000 })
);
app.get("/api", homeController.index);

export default app;
