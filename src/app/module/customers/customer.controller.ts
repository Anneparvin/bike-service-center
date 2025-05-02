import { Request, Response } from "express";
import { customerService } from "./customer.service";
import httpStatus from "http-status";
import sendResponse from "../../utils/sensResponse";

const createCustomer = async (req: Request, res: Response) => 
    {
const { name, email, phone} = req.body;
const result = await customerService.createCustomer(name, email, phone);

sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message:"Customer created successfully",
    data: result,
});
};

const getAllCustomer = async(req: Request, res: Response) => {
    try{
        const result = await customerService.getCustomers();
    sendResponse(res, {
        statusCode: httpStatus.OK,
        message: "Customers fetched successfully",
        data: result,
    });
    } catch (error) {
        sendResponse(res, {
            success: false,
            statusCode: httpStatus.INTERNAL_SERVER_ERROR,
            message: "Failed to fetch customers",
            data: null,
          }); 
    }
}

const getCustomerById = async(req:Request, res: Response) => {
    const result = await customerService.getCustomerById(req.params.id);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success:true,
        message:"Customer fetched successfully",
        data: result,
    });
    };


    const updateCustomer = async (req: Request, res: Response) => {
        const result = await customerService.updateCustomer(
          req.params.id,
          req.body
        );
        sendResponse(res, {
            statusCode: httpStatus.OK,
            success:true,
            message:"Customer updated successfully",
            data: result,
        });
      };

      const deleteCustomer =  async (req: Request, res: Response) => {
        sendResponse(res, {
            statusCode: httpStatus.OK,
            success:true,
            message:"Customer deleted successfully",
            data: undefined,
        });
      };


export const customerController = {
   createCustomer,
   getAllCustomer,
   getCustomerById,
   updateCustomer,
   deleteCustomer,
  };
  