import { Router } from "express";
import { createData, getData,delData } from "../controllers/academic.controller.js";
const router = Router();

router.post("/createData", createData);
router.get("/getData", getData);
router.post("/deleteData", delData)

export default router;
