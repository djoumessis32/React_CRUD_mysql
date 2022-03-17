import express from "express";

// import { getEmploye } from "../Controlle/employe";

const router = express.Router();
import {
   CreateEmploye,
   DeletEmploye,
   getEmploye,
   getEmployeById,
   UpdateEmploye,
} from "../Controlle/employe.controlle.js";

//employée
router.get("/", getEmploye);
router.get("/:id", getEmployeById);
router.post("/", CreateEmploye);
router.put("/:id", UpdateEmploye);
router.delete("/:id", DeletEmploye);

export default router;
