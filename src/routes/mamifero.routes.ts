import { Router } from "express";
import { MamiferoController } from "../controller/mamiferoController";


const routes = Router();
const mamiferoController = new MamiferoController();

routes.get("/buscar/javali", mamiferoController.getAll);
routes.get("/:nome", mamiferoController.getByName);
routes.post("/criarJavali", mamiferoController.create);
routes.put("/atualizar/:id", mamiferoController.update);
routes.delete("/excluir/:id", mamiferoController.delete);


export { routes };