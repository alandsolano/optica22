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

    public async getFormulaById(req: Request, res: Response) {
      const { id: idParam } = req.params;
  
      try {
        const formula: FormulaOpticaI | null = await FormulaOptica.findOne({
          where: {
            id: idParam
          }
        });
        if (formula) {
          res.status(200).json(formula);
        } else {
          res.status(404).json({ msg: "La fórmula óptica no existe" });
        }
      } catch (error) {
        res.status(500).json({ msg: "Error interno" });
      }
    }

    public async createFormula(req: Request, res: Response) {
      const {
        ojoDerEsfera,
        ojoDerCilindro,
        ojoDerEje,
        ojoIzqEsfera,
        ojoIzqCilindro,
        ojoIzqEje,
        consultaId
      } = req.body;
  
      try {
        let body: FormulaOpticaI = {
          ojoDerEsfera,
          ojoDerCilindro,
          ojoDerEje,
          ojoIzqEsfera,
          ojoIzqCilindro,
          ojoIzqEje,
          consultaId
        };
        const newFormula = await FormulaOptica.create({ ...body });
        res.status(201).json(newFormula);
      } catch (error) {
        res.status(500).json({ error: "Error al crear la fórmula óptica", details: error });
      }
    }

    public async updateFormula(req: Request, res: Response) {
      const { id: pk } = req.params;
      const {
        ojoDerEsfera,
        ojoDerCilindro,
        ojoDerEje,
        ojoIzqEsfera,
        ojoIzqCilindro,
        ojoIzqEje,
        consultaId
      } = req.body;
      try {
        let body: FormulaOpticaI = {
          ojoDerEsfera,
          ojoDerCilindro,
          ojoDerEje,
          ojoIzqEsfera,
          ojoIzqCilindro,
          ojoIzqEje,
          consultaId
        };
  
        const formulaExist = await FormulaOptica.findOne({
          where: {
            id: pk
          }
        });
  
        if (formulaExist) {
          await formulaExist.update(body, {
            where: { id: pk }
          });
          res.status(200).json(formulaExist);
        } else {
          res.status(404).json({ error: "Fórmula Óptica no encontrada" });
        }
      } catch (error: any) {
        res.status(400).json({ error: error.message });
      }
    }

    public async deleteFormula(req: Request, res: Response) {
      try {
        const { id } = req.params;
        const formulaToDelete = await FormulaOptica.findByPk(id);
  
        if (formulaToDelete) {
          await formulaToDelete.destroy();
          res.status(200).json({ message: "Fórmula Óptica eliminada exitosamente" });
        } else {
          res.status(404).json({ message: "Fórmula Óptica no encontrada" });
        }
      } catch (error) {
        res.status(500).json({ message: "Error al eliminar la fórmula óptica" });
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