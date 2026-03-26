import { Router } from "express";
import * as todoController from "./todo.controller"; 
const router = Router();

router.get("/", todoController.getTodo);
router.post("/", todoController.postTodo);
router.put("/", todoController.updateTodo);
router.delete("/", todoController.deleteTodo);

router.get("/:id", todoController.getUniqueTodo);

export { router as todoRouter };