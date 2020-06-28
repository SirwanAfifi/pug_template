import express, { Request, Response } from "express";
import path from "path";

const app = express();

app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "pug");

app.get("/", (req: Request, res: Response) => {
  res.render("home", {
    username: "SirwanAfifi",
  });
});

export default app;
