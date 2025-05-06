import {  Request, Response } from 'express';
import { where } from 'sequelize/types';
import { Cliente, ClienteI } from '../models/cliente';

export class ClienteController {
    public async test(req: Request, res: Response) {
      try {
        res.send('Hola, método test para Cliente');
      } catch (error) {
        res.status(500).send(error);
      }
    }

    public async getOneCliente(req: Request, res:Response){
        const { id: idParam } = req.params

        try {
            const cliente:ClienteI | null = await Cliente.findOne(
                {
                    where: { 
                        id: idParam,
                    }
                }
            )
            if (cliente){
                res.status(200).json(cliente)
            } else return  res.status(300).json({msg: "El Cliente no existe"})

        } catch (error) {
            res.status(500).json({msg: "Error Internal"})
        }
    }

    public async createCliente(req: Request, res: Response) {
        const {
          NOMBRE,
          DOCUMENTO,
          TELEFONO,
          CORREO,
          DIRECCION
        } = req.body;
    
        try {
          const cliente = await Cliente.create({
            NOMBRE,
            DOCUMENTO,
            TELEFONO,
            CORREO,
            DIRECCION
          });
          res.status(201).json({ cliente });
        } catch (error) {
          res.status(500).json({ error: 'Error al crear el cliente', details: error });
        }
      }
  
    public async getAllCliente(req: Request, res: Response) {
      try {
        const clientes = await Cliente.findAll();
        res.status(200).json({ clientes });
      } catch (error) {
        res.status(500).send(error);
      }
    }

  }