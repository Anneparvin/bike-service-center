"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const library_1 = require("@prisma/client/runtime/library");
const appError_1 = require("./appError");
const globalErrorHandler = (err, req, res, next) => {
    let status = err.status || 500;
    let success = false;
    let message = err.message || "Something went wrong!";
    if (err instanceof library_1.PrismaClientValidationError) {
        message = "Validation Error";
        status = 400;
    }
    else if (err instanceof library_1.PrismaClientKnownRequestError) {
        if (err.code === "P2002") {
            message = "Duplicate key error";
            status = 409;
        }
    }
    else if (err instanceof appError_1.AppError) {
        status = err.status;
        message = err.message;
    }
    const isDev = process.env.NODE_ENV === "development";
    console.log(isDev);
    res.status(status).json(Object.assign({ success,
        status,
        message }, (isDev && { stack: err.stack })));
};
exports.default = globalErrorHandler;
