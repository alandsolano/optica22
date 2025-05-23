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

    public async updateVenta(req: Request, res: Response) {
      const { id: pk } = req.params;
      const { fechaVenta, totalVenta, formaPago, consultaId } = req.body;
      try {
        let body: VentaI = {
          fechaVenta,
          totalVenta,
          formaPago,
          consultaId
        };
  
        const ventaExist = await Venta.findOne({
          where: {
            id: pk
          }
        });
  
        if (ventaExist) {
          await ventaExist.update(body, {
            where: { id: pk }
          });
          res.status(200).json(ventaExist);
        } else {
          res.status(404).json({ error: "Venta no encontrada" });
        }
      } catch (error: any) {
        res.status(400).json({ error: error.message });
      }
    }

    public async deleteVenta(req: Request, res: Response) {
      try {
        const { id } = req.params;
        const ventaToDelete = await Venta.findByPk(id);
  
        if (ventaToDelete) {
          await ventaToDelete.destroy();
          res.status(200).json({ message: "Venta eliminada exitosamente" });
        } else {
          res.status(404).json({ message: "Venta no encontrada" });
        }
      } catch (error) {
        res.status(500).json({ message: "Error al eliminar la venta" });
      }
    }

    public async createVenta(req: Request, res: Response) {
      const { fechaVenta, totalVenta, formaPago, consultaId } = req.body;
  
      try {
        let body: VentaI = {
          fechaVenta,
          totalVenta,
          formaPago,
          consultaId
        };
        const newVenta = await Venta.create({ ...body });
        res.status(201).json(newVenta);
      } catch (error) {
        res.status(500).json({ error: "Error al crear la venta", details: error });
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

    public async getVentaById(req: Request, res: Response) {
      const { id: idParam } = req.params;
  
      try {
        const venta: VentaI | null = await Venta.findOne({
          where: {
            id: idParam
          }
        });
        if (venta) {
          res.status(200).json(venta);
        } else {
          res.status(404).json({ msg: "La venta no existe" });
        }
      } catch (error) {
        res.status(500).json({ msg: "Error interno" });
      }
    }
  }