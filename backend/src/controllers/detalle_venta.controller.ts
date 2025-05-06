import {  Request, Response } from 'express';
import { where } from 'sequelize/types';
import { DetalleVentaLente, DetalleVentaLenteI } from '../models/detalle_venta';

export class DetalleVentaLenteController {
    public async test(req: Request, res: Response) {
      try {
        res.send('Hola, método test para Detalle Venta Lente');
      } catch (error) {
        res.status(500).send(error);
      }
    }
  
    public async getAllDetalleVentaLente(req: Request, res: Response) {
      try {
        const detallesVentasLentes = await DetalleVentaLente.findAll();
        res.status(200).json({ detallesVentasLentes });
      } catch (error) {
        res.status(500).send(error);
      }
    }
  }