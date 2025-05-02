import express, { Application, Request, Response } from "express";
import cors from "cors";
import { customerRoutes } from "./app/module/customers/customer.route";
import { bikeRoutes } from "./app/module/bikes/bike.route";
import { serviceRoutes } from "./app/module/services/service.route";
import globalErrorHandler from "./app/middleware/globalErrorHandler";
import notfound from "./app/middleware/notFound";

const app: Application = express();
app.use(cors());
app.use(express.json());

app.use("/api/customers", customerRoutes);
app.use("/api/bikes", bikeRoutes);
app.use("/api/services", serviceRoutes);



app.get("/", (req:Request, res: Response) => {
    res.send({
        message:"The server is running",
    });
});

app.use(globalErrorHandler);
app.use(notfound);

export default app;