import {  Request, Response } from 'express';
import { where } from 'sequelize/types';
import { FormulaOptica, FormulaOpticaI } from '../models/formula';

export class FormulaOpticaController {
    public async test(req: Request, res: Response) {
      try {
        res.send('Hola, método test para Fórmula Óptica');
      } catch (error) {
        res.status(500).send(error);
      }
    }
  
    public async getAllFormulaOptica(req: Request, res: Response) {
      try {
        const formulasOpticas = await FormulaOptica.findAll();
        res.status(200).json({ formulasOpticas });
      } catch (error) {
        res.status(500).send(error);
      }
    }
  }