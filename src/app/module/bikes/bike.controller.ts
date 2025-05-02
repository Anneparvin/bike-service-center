import { Request, Response } from "express";
import httpStatus from "http-status";
import sendResponse from "../../utils/sensResponse";
import { bikeService } from "./bike.service";

const createBike = async (req: Request, res: Response) => 
    {
const { brand, model, year,
    customerId
} = req.body;
const result = await bikeService.createBike(brand, model, year, customerId
);

sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message:"Bike added successfully",
    data: result,
});
};

const getAllBike = async(req: Request, res: Response) => {
    const result = await bikeService.getBikes();
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success:true,
        message: "Bikes fetched successfully",
        data: [result],
    });
}

const getBikeById = async(req:Request, res: Response) => {
    const result = await bikeService.getBikeById(req.params.id);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success:true,
        message:"Bike fetched successfully",
        data: result,
    });
    };



export const bikeController = {
   createBike,
   getAllBike,
   getBikeById,
  };
  