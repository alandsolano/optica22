import {  Request, Response } from 'express';
import { where } from 'sequelize/types';
import { Venta, VentaI } from '../models/venta';

export class VentaController {
    public async test(req: Request, res: Response) {
      try {
        res.send('Hola, método test para Venta');
      } catch (error) {
        res.status(500).send(error);
      }
    }
  
    public async getAllVenta(req: Request, res: Response) {
      try {
        const ventas = await Venta.findAll();
        res.status(200).json({ ventas });
      } catch (error) {
        res.status(500).send(error);
      }
    }
  }