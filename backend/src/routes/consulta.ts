import { Request, Response, Application, Router } from "express";
import { ConsultaController } from '../controllers/consulta.controller';

export class ConsultaRoutes {
    public consultaController: ConsultaController = new ConsultaController();
  
    public routes(app: Application): void {
      app.route("/consultas/test").get(this.consultaController.test);
      app.route("/consultas").get(this.consultaController.getAllConsulta);
    }
  }