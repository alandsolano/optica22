import { Request, Response, Application, Router } from "express";
import { DetalleVentaLenteController } from '../controllers/detalle_venta.controller';


export class DetalleVentaLenteRoutes {
    public detalleVentaLenteController: DetalleVentaLenteController = new DetalleVentaLenteController();
  
    public routes(app: Application): void {
      app.route("/detallesVentasLentes/test").get(this.detalleVentaLenteController.test);
      app.route("/detallesVentasLentes").get(this.detalleVentaLenteController.getAllDetalleVentaLente);
      app.route("/detalle_venta").post(this.detalleVentaLenteController.createDetalleVenta);
      app.route("/detallesVentasLentes/:id").patch(this.detalleVentaLenteController.updateDetalleVenta);
      app.route("/detallesVentasLentes/:id").delete(this.detalleVentaLenteController.deleteDetalleVenta);
      app.route("/detallesVentasLentes/:id").get(this.detalleVentaLenteController.getDetalleVentaById);
    }
  }