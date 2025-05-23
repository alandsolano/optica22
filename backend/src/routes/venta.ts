import { Request, Response, Application, Router } from "express";
import { VentaController } from '../controllers/venta.controller';
import { authMiddleware } from "../middleware/auth";

export class VentaRoutes {
    public ventaController: VentaController = new VentaController();
  
    public routes(app: Application): void {
      app.route("/ventas/test").get(this.ventaController.test);
      app.route("/ventas").get(authMiddleware,this.ventaController.getAllVenta);
      app.route("/venta").post(authMiddleware,this.ventaController.createVenta);
      app.route("/ventas/:id").patch(authMiddleware,this.ventaController.updateVenta);
      app.route("/ventas/:id").delete(authMiddleware,this.ventaController.deleteVenta);
      app.route("/ventas/:id").get(authMiddleware,this.ventaController.getVentaById);
    }
  }