import { Request, Response, Application, Router } from "express";
import { LenteController } from '../controllers/lente.controller';

export class LenteRoutes {
    public lenteController: LenteController = new LenteController();
  
    public routes(app: Application): void {
      app.route("/lentes/test").get(this.lenteController.test);
      app.route("/lentes").get(this.lenteController.getAllLente);
      app.route("/lente").post(this.lenteController.createLente);
      app.route("/lentes/:id").patch(this.lenteController.updateLente);
      app.route("/lentes/:id").delete(this.lenteController.deleteLente);
      app.route("/lentes/:id").get(this.lenteController.getLenteById);

    }
  }