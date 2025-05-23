import { Request, Response, Application, Router } from "express";
import { LenteController } from '../controllers/lente.controller';
import { authMiddleware } from "../middleware/auth";

export class LenteRoutes {
    public lenteController: LenteController = new LenteController();
  
    public routes(app: Application): void {
      app.route("/lentes/test").get(this.lenteController.test);
      app.route("/lentes").get(authMiddleware,this.lenteController.getAllLente);
      app.route("/lente").post(authMiddleware,this.lenteController.createLente);
      app.route("/lentes/:id").patch(authMiddleware,this.lenteController.updateLente);
      app.route("/lentes/:id").delete(authMiddleware,this.lenteController.deleteLente);
      app.route("/lentes/:id").get(authMiddleware,this.lenteController.getLenteById);

    }
  }