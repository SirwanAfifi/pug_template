import { Handler, Request, Response, NextFunction } from "express";

const AuthCheck = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    // TODO: Check Authorisation header
    next();
  } catch {
    response.sendStatus(401);
    response.end();
  }
};

export default AuthCheck;
