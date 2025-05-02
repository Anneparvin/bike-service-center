"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const notfound = (req, res, next) => {
    res.status(404).json({
        success: false,
        message: "API NOT FOUND!",
        error: {
            path: req.originalUrl,
            message: "Your requested path is not found!",
        },
    });
};
exports.default = notfound;
