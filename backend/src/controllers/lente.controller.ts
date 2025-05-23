import {  Request, Response } from 'express';
import { where } from 'sequelize/types';
import { Lente, LenteI } from '../models/lente';

export class LenteController {
    public async test(req: Request, res: Response) {
      try {
        res.send('Hola, método test para Lente');
      } catch (error) {
        res.status(500).send(error);
      }
    }

    public async updateLente(req: Request, res: Response) {
      const { id: pk } = req.params;
      const { nombreComercial, tipoLente, material, color, precioUnitario } = req.body;
      try {
        let body: LenteI = {
          nombreComercial,
          tipoLente,
          material,
          color,
          precioUnitario
        };
  
        const lenteExist = await Lente.findOne({
          where: {
            id: pk
          }
        });
  
        if (lenteExist) {
          await lenteExist.update(body, {
            where: { id: pk }
          });
          res.status(200).json(lenteExist);
        } else {
          res.status(404).json({ error: "Lente no encontrado" });
        }
      } catch (error: any) {
        res.status(400).json({ error: error.message });
      }
    }

    public async deleteLente(req: Request, res: Response) {
      try {
        const { id } = req.params;
        const lenteToDelete = await Lente.findByPk(id);
  
        if (lenteToDelete) {
          await lenteToDelete.destroy();
          res.status(200).json({ message: "Lente eliminado exitosamente" });
        } else {
          res.status(404).json({ message: "Lente no encontrado" });
        }
      } catch (error) {
        res.status(500).json({ message: "Error al eliminar el lente" });
      }
    }

    public async getLenteById(req: Request, res: Response) {
      const { id: idParam } = req.params;
  
      try {
        const lente: LenteI | null = await Lente.findOne({
          where: {
            id: idParam
          }
        });
        if (lente) {
          res.status(200).json(lente);
        } else {
          res.status(404).json({ msg: "El lente no existe" });
        }
      } catch (error) {
        res.status(500).json({ msg: "Error interno" });
      }
    }

    public async createLente(req: Request, res: Response) {
      const { nombreComercial, tipoLente, material, color, precioUnitario } = req.body;
  
      try {
        let body: LenteI = {
          nombreComercial,
          tipoLente,
          material,
          color,
          precioUnitario
        };
        const newLente = await Lente.create({ ...body });
        res.status(201).json(newLente);
      } catch (error) {
        res.status(500).json({ error: "Error al crear el lente", details: error });
      }
    }
  
    public async getAllLente(req: Request, res: Response) {
      try {
        const lentes = await Lente.findAll();
        res.status(200).json({ lentes });
      } catch (error) {
        res.status(500).send(error);
      }
    }
  }