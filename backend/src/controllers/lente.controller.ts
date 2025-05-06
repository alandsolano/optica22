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
  
    public async getAllLente(req: Request, res: Response) {
      try {
        const lentes = await Lente.findAll();
        res.status(200).json({ lentes });
      } catch (error) {
        res.status(500).send(error);
      }
    }
  }