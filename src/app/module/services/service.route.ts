import express from "express";
import { serviceController } from "./service.controller";


const router = express.Router();


router.post("/", serviceController.createService);
router.get("/", serviceController.getAllService);
router.get("/:id", serviceController.getServiceById);
router.put("/:id", serviceController.updateService);
 router.get("/status ", serviceController.getServicesByStatus);


export const serviceRoutes = router;