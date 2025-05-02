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
exports.serviceRecordServices = void 0;
const config_1 = __importDefault(require("../../config"));
const createService = (bikeId, serviceDate, description, status) => __awaiter(void 0, void 0, void 0, function* () {
    return config_1.default.serviceRecord.create({
        data: {
            bikeId,
            serviceDate: new Date(serviceDate),
            description,
            status
        },
    });
});
const getServices = () => __awaiter(void 0, void 0, void 0, function* () {
    return config_1.default.serviceRecord.findMany();
});
const getServiceById = (serviceId) => __awaiter(void 0, void 0, void 0, function* () {
    return config_1.default.serviceRecord.findUnique({
        where: { serviceId },
        include: {}
    });
});
const updateService = (serviceId, completionDate) => __awaiter(void 0, void 0, void 0, function* () {
    return config_1.default.serviceRecord.update({
        where: { serviceId },
        data: {
            status: "done",
            completionDate: new Date(completionDate),
        },
    });
});
const getOverdueOrPendingServices = () => __awaiter(void 0, void 0, void 0, function* () {
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    const services = yield config_1.default.serviceRecord.findMany({
        where: {
            status: {
                in: ['pending', 'in-progress']
            },
            serviceDate: {
                lt: sevenDaysAgo // Find services older than 7 days
            }
        }
    });
    return {
        success: true,
        message: "Overdue or pending services fetched successfully",
        data: services
    };
});
exports.serviceRecordServices = {
    createService,
    getServices,
    getServiceById,
    updateService,
    getOverdueOrPendingServices
};
