import { Request, Response, Application, Router } from "express";
import { DetalleVentaLenteController } from '../controllers/detalle_venta.controller';
import { authMiddleware } from "../middleware/auth";


export class DetalleVentaLenteRoutes {
    public detalleVentaLenteController: DetalleVentaLenteController = new DetalleVentaLenteController();
  
    public routes(app: Application): void {
      app.route("/detallesVentasLentes/test").get(this.detalleVentaLenteController.test);
      app.route("/detallesVentasLentes").get(authMiddleware,this.detalleVentaLenteController.getAllDetalleVentaLente);
      app.route("/detalle_venta").post(authMiddleware,this.detalleVentaLenteController.createDetalleVenta);
      app.route("/detallesVentasLentes/:id").patch(authMiddleware,this.detalleVentaLenteController.updateDetalleVenta);
      app.route("/detallesVentasLentes/:id").delete(authMiddleware,this.detalleVentaLenteController.deleteDetalleVenta);
      app.route("/detallesVentasLentes/:id").get(authMiddleware,this.detalleVentaLenteController.getDetalleVentaById);
    }
  }