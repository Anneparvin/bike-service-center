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
exports.customerService = void 0;
const config_1 = __importDefault(require("../../config"));
const createCustomer = (name, email, phone) => __awaiter(void 0, void 0, void 0, function* () {
    return config_1.default.customer.create({
        data: { name, email, phone },
    });
});
const getCustomers = () => __awaiter(void 0, void 0, void 0, function* () {
    return config_1.default.customer.findMany();
});
const getCustomerById = (customerId) => __awaiter(void 0, void 0, void 0, function* () {
    return config_1.default.customer.findUnique({
        where: { customerId },
        // include: {}
    });
});
const updateCustomer = (customerId, data) => __awaiter(void 0, void 0, void 0, function* () {
    return config_1.default.customer.update({
        where: { customerId },
        data,
    });
});
const deleteCustomer = (customerId) => __awaiter(void 0, void 0, void 0, function* () {
    return config_1.default.customer.delete({
        where: { customerId },
    });
});
exports.customerService = {
    createCustomer,
    getCustomers,
    getCustomerById,
    updateCustomer,
    deleteCustomer
};
