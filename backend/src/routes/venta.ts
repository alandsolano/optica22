import { Request, Response, Application, Router } from "express";
import { VentaController } from '../controllers/venta.controller';

export class VentaRoutes {
    public ventaController: VentaController = new VentaController();
  
    public routes(app: Application): void {
      app.route("/ventas/test").get(this.ventaController.test);
      app.route("/ventas").get(this.ventaController.getAllVenta);
    }
  }