import { Request, Response, Application, Router } from "express";
import { LenteController } from '../controllers/lente.controller';

export class LenteRoutes {
    public lenteController: LenteController = new LenteController();
  
    public routes(app: Application): void {
      app.route("/lentes/test").get(this.lenteController.test);
      app.route("/lentes").get(this.lenteController.getAllLente);
    }
  }