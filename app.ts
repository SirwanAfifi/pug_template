import express from "express";
import bodyParser from "body-parser";
import path from "path";

import * as homeController from "./api/homeController";
import AuthCheck from "./middlewares/auth";

const app = express();

app.use(AuthCheck);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  express.static(path.join(__dirname, "public"), { maxAge: 31557600000 })
);
app.get("/api", homeController.index);

export default app;
