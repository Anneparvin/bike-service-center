import { Request, Response } from "express";
import httpStatus from "http-status";
import sendResponse from "../../utils/sensResponse";
import { serviceRecordServices } from "./service.service";

const createService = async (req: Request, res: Response) => 
    {
const {bikeId, serviceDate, status, description} = req.body;
const result = await serviceRecordServices.createService(
    bikeId,
    serviceDate,
    description,
    status
);

sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message:"Service record created successfully",
    data: result,
});
};

const getAllService = async(req: Request, res: Response) => {
    try{
        const result = await serviceRecordServices.getServices();
    sendResponse(res, {
        statusCode: httpStatus.OK,
        message: "Service records fetched successfully",
        data: result,
    });
    } catch (error) {
        sendResponse(res, {
            success: false,
            statusCode: httpStatus.INTERNAL_SERVER_ERROR,
            message: "Failed to fetch services",
            data: null,
          }); 
    }
}

const getServiceById = async(req:Request, res: Response) => {
    const result = await serviceRecordServices.getServiceById(req.params.id);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success:true,
        message:"Service record fetched successfully",
        data: result,
    });
    };


    const updateService = async (
        req: Request, res: Response
    ) => {
        const { id } = req.params;
        const { completionDate } = req.body;
        console.log(completionDate);

        const result = await serviceRecordServices.updateService(id, completionDate);
        sendResponse(res, {
            statusCode: httpStatus.OK,
            success:true,
            message:"Service marked as completed",
            data: result,
        });
      };

      const getServicesByStatus = async (req: Request, res: Response) => {

        const result = await serviceRecordServices.getOverdueOrPendingServices();
        sendResponse(res, {
            statusCode: httpStatus.OK,
            success:true,
            message:'Overdue or pending services fetched successfully',
            data: result,
        });
      }
export const serviceController = {
  createService,
  getAllService,
  getServiceById,
  updateService,
  getServicesByStatus
  };
  