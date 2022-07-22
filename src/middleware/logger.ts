import { NextFunction, Request, Response } from "express";
import moment from "moment";

const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(
    `${req.protocol}://${req.get("host")}${
      req.originalUrl
    }: ${moment().format()}`
  );

  next();
};

export default logger;
