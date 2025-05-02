"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const customer_route_1 = require("./app/module/customers/customer.route");
const bike_route_1 = require("./app/module/bikes/bike.route");
const service_route_1 = require("./app/module/services/service.route");
const globalErrorHandler_1 = __importDefault(require("./app/middleware/globalErrorHandler"));
const notFound_1 = __importDefault(require("./app/middleware/notFound"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/api/customers", customer_route_1.customerRoutes);
app.use("/api/bikes", bike_route_1.bikeRoutes);
app.use("/api/services", service_route_1.serviceRoutes);
app.get("/", (req, res) => {
    res.send({
        message: "The server is running",
    });
});
app.use(globalErrorHandler_1.default);
app.use(notFound_1.default);
exports.default = app;
