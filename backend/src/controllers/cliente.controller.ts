import {  Request, Response } from 'express';
import { where } from 'sequelize/types';
import { Cliente } from '../models/cliente';

export class ClienteController {
    public async test(req: Request, res: Response) {
      try {
        res.send('Hola, método test para Cliente');
      } catch (error) {
        res.status(500).send(error);
      }
    }
  
    public async getAllCliente(req: Request, res: Response) {
      try {
        const clientes = await Cliente.findAll();
        res.status(200).json({ clientes });
      } catch (error) {
        res.status(500).send(error);
      }
    }
  }