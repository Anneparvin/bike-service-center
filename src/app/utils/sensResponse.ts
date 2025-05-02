import { Response } from "express";

type TSuccessResponse<T> = {
    success?:boolean;
    statusCode: number;
    message: string;
    data:T | T[] | null;
};

const sendResponse = <T>(res: Response, data: TSuccessResponse<T>) => {
    res.status(data.statusCode).json({
        success: true,
      message: data.message,
      data: data.data,
    });
  };
  
  export default sendResponse;