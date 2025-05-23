import { Request, Response, Application, Router } from "express";
import { ConsultaController } from '../controllers/consulta.controller';

export class ConsultaRoutes {
    public consultaController: ConsultaController = new ConsultaController();
  
    public routes(app: Application): void {
      app.route("/consultas/test").get(this.consultaController.test);
      app.route("/consultas").get(this.consultaController.getAllConsulta);
      app.route("/consultas/:id").get(this.consultaController.getConsultaById);
      app.route("/consulta").post(this.consultaController.createConsulta);
      app.route("/consultas/:id").patch(this.consultaController.updateConsulta);
      app.route("/consultas/:id").delete(this.consultaController.deleteConsulta);
    }
  }