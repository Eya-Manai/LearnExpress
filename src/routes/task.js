import { Router } from "express";
import {
  getAllTasks,
  AddTask,
  GetTaskByID,
  DeleteTask,
  UpdateTask,
} from "../contollers/task.js";

const router = Router();

router.get("/", getAllTasks);
router.post("/", AddTask);
router.get("/:id", GetTaskByID);
router.delete("/:id", DeleteTask);
router.patch("/:id", UpdateTask);

export default router;
