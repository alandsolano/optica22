import { Request, Response, Application, Router } from "express";
import { DetalleVentaLenteController } from '../controllers/detalle_venta.controller';


export class DetalleVentaLenteRoutes {
    public detalleVentaLenteController: DetalleVentaLenteController = new DetalleVentaLenteController();
  
    public routes(app: Application): void {
      app.route("/detallesVentasLentes/test").get(this.detalleVentaLenteController.test);
      app.route("/detallesVentasLentes").get(this.detalleVentaLenteController.getAllDetalleVentaLente);
    }
  }