import express from "express";
import { bikeController } from "./bike.controller";


const router = express.Router();


router.post("/", bikeController.createBike);
router.get("/", bikeController.getAllBike);
router.get("/:id", bikeController.getBikeById);



export const bikeRoutes = router;