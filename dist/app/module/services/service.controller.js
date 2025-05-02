"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const sensResponse_1 = __importDefault(require("../../utils/sensResponse"));
const service_service_1 = require("./service.service");
const createService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { bikeId, serviceDate, status, description } = req.body;
    const result = yield service_service_1.serviceRecordServices.createService(bikeId, serviceDate, description, status);
    (0, sensResponse_1.default)(res, {
        statusCode: http_status_1.default.CREATED,
        success: true,
        message: "Service record created successfully",
        data: result,
    });
});
const getAllService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield service_service_1.serviceRecordServices.getServices();
        (0, sensResponse_1.default)(res, {
            statusCode: http_status_1.default.OK,
            message: "Service records fetched successfully",
            data: result,
        });
    }
    catch (error) {
        (0, sensResponse_1.default)(res, {
            success: false,
            statusCode: http_status_1.default.INTERNAL_SERVER_ERROR,
            message: "Failed to fetch services",
            data: null,
        });
    }
});
const getServiceById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield service_service_1.serviceRecordServices.getServiceById(req.params.id);
    (0, sensResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Service record fetched successfully",
        data: result,
    });
});
const updateService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { completionDate } = req.body;
    console.log(completionDate);
    const result = yield service_service_1.serviceRecordServices.updateService(id, completionDate);
    (0, sensResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Service marked as completed",
        data: result,
    });
});
const getServicesByStatus = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const services = yield service_service_1.serviceRecordServices.getOverdueOrPendingServices();
        res.status(200).json({
            success: true,
            message: services ? "Overdue or pending services fetched successfully" : "No matching service records found",
            data: services,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.serviceController = {
    createService,
    getAllService,
    getServiceById,
    updateService,
    getServicesByStatus
};
