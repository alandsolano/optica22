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

    public async updateDetalleVenta(req: Request, res: Response) {
      const { id: pk } = req.params;
      const { cantidad, subtotal, idVenta, idLente } = req.body;
      try {
        let body: DetalleVentaLenteI = {
          cantidad,
          subtotal,
          idVenta,
          idLente
        };
  
        const detalleVentaExist = await DetalleVentaLente.findOne({
          where: {
            id: pk
          }
        });
  
        if (detalleVentaExist) {
          await detalleVentaExist.update(body, {
            where: { id: pk }
          });
          res.status(200).json(detalleVentaExist);
        } else {
          res.status(404).json({ error: "Detalle de venta no encontrado" });
        }
      } catch (error: any) {
        res.status(400).json({ error: error.message });
      }
    }

    public async deleteDetalleVenta(req: Request, res: Response) {
      try {
        const { id } = req.params;
        const detalleVentaToDelete = await DetalleVentaLente.findByPk(id);
  
        if (detalleVentaToDelete) {
          await detalleVentaToDelete.destroy();
          res.status(200).json({ message: "Detalle de venta eliminado exitosamente" });
        } else {
          res.status(404).json({ message: "Detalle de venta no encontrado" });
        }
      } catch (error) {
        res.status(500).json({ message: "Error al eliminar el detalle de venta" });
      }
    }

    public async getDetalleVentaById(req: Request, res: Response) {
      const { id: idParam } = req.params;
  
      try {
        const detalleVenta: DetalleVentaLenteI | null = await DetalleVentaLente.findOne({
          where: {
            id: idParam
          }
        });
        if (detalleVenta) {
          res.status(200).json(detalleVenta);
        } else {
          res.status(404).json({ msg: "El detalle de venta no existe" });
        }
      } catch (error) {
        res.status(500).json({ msg: "Error interno" });
      }
    }

    public async createDetalleVenta(req: Request, res: Response) {
      const { cantidad, subtotal, idVenta, idLente } = req.body;
  
      try {
        let body: DetalleVentaLenteI = {
          cantidad,
          subtotal,
          idVenta,
          idLente
        };
        const newDetalleVenta = await DetalleVentaLente.create({ ...body });
        res.status(201).json(newDetalleVenta);
      } catch (error) {
        res.status(500).json({ error: "Error al crear el detalle de venta", details: error });
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