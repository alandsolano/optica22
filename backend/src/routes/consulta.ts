import { Request, Response, Application, Router } from "express";
import { ConsultaController } from '../controllers/consulta.controller';
import { authMiddleware } from "../middleware/auth";

export class ConsultaRoutes {
    public consultaController: ConsultaController = new ConsultaController();
  
    public routes(app: Application): void {
      app.route("/consultas/test").get(this.consultaController.test);
      app.route("/consultas").get(authMiddleware,this.consultaController.getAllConsulta);
      app.route("/consultas/:id").get(authMiddleware,this.consultaController.getConsultaById);
      app.route("/consulta").post(authMiddleware,this.consultaController.createConsulta);
      app.route("/consultas/:id").patch(authMiddleware,this.consultaController.updateConsulta);
      app.route("/consultas/:id").delete(authMiddleware,this.consultaController.deleteConsulta);
    }
  }