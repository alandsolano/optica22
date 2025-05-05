import { Request, Response } from "express";
import { Cliente, ClienteI } from "../models/Cliente";

export class ClienteController {
  // Obtener todos los clientes con estado "Activo"
  public async getAllCliente(req: Request, res: Response) {
    try {
      const clientes: ClienteI[] = await Cliente.findAll({
        where: { estado: 'ACTIVO' },
      });
      res.status(200).json({ clientes });
    } catch (error) {
      res.status(500).json({ error: "Error fetching clients" });
    }
  }

  // Obtener un cliente por ID
  public async getClienteById(req: Request, res: Response) {
    try {
      const { id: pk } = req.params;
      const cliente = await Cliente.findOne({
        where: { 
          id: pk, 
          estado: 'ACTIVO' }, // Agregar condición de estado
      });
      if (cliente) {
        res.status(200).json(cliente);
      } else {
        res.status(404).json({ error: "Cliente not found or inactive" });
      }
    } catch (error) {
      res.status(500).json({ error: "Error fetching client" });
    }
  }

  
}