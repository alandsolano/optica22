import {  Request, Response } from 'express';
import { where } from 'sequelize/types';
import { Consulta, ConsultaI } from '../models/consulta';

export class ConsultaController {
    public async test(req: Request, res: Response) {
      try {
        res.send('Hola, método test para Consulta');
      } catch (error) {
        res.status(500).send(error);
      }
    }
  
    public async getAllConsulta(req: Request, res: Response) {
      try {
        const consultas = await Consulta.findAll();
        res.status(200).json({ consultas });
      } catch (error) {
        res.status(500).send(error);
      }
    }

    public async updateConsulta(req: Request, res: Response) {
      const { id: pk } = req.params;
      const { fechaConsulta, motivo, diagnostico, observaciones, clienteId } = req.body;
      try {
        let body: ConsultaI = {
          fechaConsulta,
          motivo,
          diagnostico,
          observaciones,
          clienteId
        };
  
        const consultaExist = await Consulta.findOne({
          where: {
            id: pk
          }
        });
  
        if (consultaExist) {
          await consultaExist.update(body, {
            where: { id: pk }
          });
          res.status(200).json(consultaExist);
        } else {
          res.status(404).json({ error: "Consulta no encontrada" });
        }
      } catch (error: any) {
        res.status(400).json({ error: error.message });
      }
    }

    public async deleteConsulta(req: Request, res: Response) {
      try {
        const { id } = req.params;
        const consultaToDelete = await Consulta.findByPk(id);
  
        if (consultaToDelete) {
          await consultaToDelete.destroy();
          res.status(200).json({ message: "Consulta eliminada exitosamente" });
        } else {
          res.status(404).json({ message: "Consulta no encontrada" });
        }
      } catch (error) {
        res.status(500).json({ message: "Error al eliminar la consulta" });
      }
    }

    public async getConsultaById(req: Request, res: Response) {
      const { id: idParam } = req.params;
  
      try {
        const consulta: ConsultaI | null = await Consulta.findOne({
          where: {
            id: idParam
          }
        });
        if (consulta) {
          res.status(200).json(consulta);
        } else {
          res.status(404).json({ msg: "La consulta no existe" });
        }
      } catch (error) {
        res.status(500).json({ msg: "Error interno" });
      }
    }

    public async createConsulta(req: Request, res: Response) {
    const { fechaConsulta, motivo, diagnostico, observaciones, clienteId } = req.body;

    try {
      let body: ConsultaI = {
        fechaConsulta,
        motivo,
        diagnostico,
        observaciones,
        clienteId
      };
      const newConsulta = await Consulta.create({ ...body });
      res.status(201).json(newConsulta);
    } catch (error) {
      res.status(500).json({ error: "Error al crear la consulta", details: error });
    }
  }

  }

  