import { Request, Response, Application, Router } from "express";
import { FormulaOpticaController } from '../controllers/formula.controller';
import { authMiddleware } from "../middleware/auth";

export class FormulaOpticaRoutes {
    public formulaOpticaController: FormulaOpticaController = new FormulaOpticaController();
  
    public routes(app: Application): void {
      app.route("/formulasOpticas/test").get(this.formulaOpticaController.test);
      app.route("/formulasOpticas").get(authMiddleware,this.formulaOpticaController.getAllFormulaOptica);
      app.route("/formula").post(authMiddleware,this.formulaOpticaController.createFormula);
      app.route("/formulasOpticas/:id").patch(authMiddleware,this.formulaOpticaController.updateFormula);
      app.route("/formulasOpticas/:id").delete(authMiddleware,this.formulaOpticaController.deleteFormula);
      app.route("/formulasOpticas/:id").get(authMiddleware,this.formulaOpticaController.getFormulaById);
      
    }
  }