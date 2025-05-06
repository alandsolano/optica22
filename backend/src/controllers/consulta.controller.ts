import {  Request, Response } from 'express';
import { where } from 'sequelize/types';
import { Consulta } from '../models/consulta';

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
  }