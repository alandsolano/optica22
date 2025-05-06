import { Request, Response, Application, Router } from "express";
import { FormulaOpticaController } from '../controllers/formula.controller';

export class FormulaOpticaRoutes {
    public formulaOpticaController: FormulaOpticaController = new FormulaOpticaController();
  
    public routes(app: Application): void {
      app.route("/formulasOpticas/test").get(this.formulaOpticaController.test);
      app.route("/formulasOpticas").get(this.formulaOpticaController.getAllFormulaOptica);
    }
  }