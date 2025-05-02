import { PrismaClientKnownRequestError, PrismaClientValidationError } from "@prisma/client/runtime/library";
import { NextFunction, Request, Response } from "express";
import { AppError } from "./appError";


const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let status = err.status || 500;
  let success = false;
  let message = err.message || "Something went wrong!";

  if (err instanceof PrismaClientValidationError) {
    message = "Validation Error";
    status = 400;
  } else if (err instanceof PrismaClientKnownRequestError) {
    if (err.code === "P2002") {
      message = "Duplicate key error";
      status = 409;
    }
  } else if (err instanceof AppError) {
    status = err.status;
    message = err.message;
  }

  const isDev = process.env.NODE_ENV === "development";
    console.log(isDev);
  res.status(status).json({
    success,
    status,
    message,
    ...(isDev && { stack: err.stack }) 
  });
};



export default globalErrorHandler;
