import { Request, Response, Application, Router } from "express";
import { ClienteController } from '../controllers/cliente.controller';
import { authMiddleware } from "../middleware/auth";


export class ClienteRoutes {
    public clienteController: ClienteController = new ClienteController();
  
    public routes(app: Application): void {
      app.route("/clientes/test").get(this.clienteController.test);
      app.route("/clientes").get(authMiddleware,this.clienteController.getAllCliente);
      //app.route("/cliente").post(this.clienteController.createCliente);
      app.route("/cliente").post(authMiddleware,this.clienteController.createCliente);
      //app.route("/clientes/:id").get(this.clienteController.getClienteById);
      app.route("/clientes/:id").get(authMiddleware,this.clienteController.getClienteById);
      //app.route("/clientes/:id").patch(this.clienteController.updateCliente);
      app.route("/clientes/:id").patch(authMiddleware,this.clienteController.updateCliente);
      //app.route("/clientes/:id").delete(this.clienteController.deleteCliente);
      app.route("/clientes/:id").delete(authMiddleware,this.clienteController.deleteCliente);
    }
  }
  