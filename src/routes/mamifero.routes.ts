import { Router } from "express";
import { MamiferoController } from "../controller/mamiferoController";


const routes = Router();
const mamiferoController = new MamiferoController();

routes.get("/javali", mamiferoController.getAll);
routes.post("/criarJavali", mamiferoController.create);
routes.put("/atualizar/:id", mamiferoController.update);


export { routes };