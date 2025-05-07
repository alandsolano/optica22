import {  Request, Response } from 'express';
// import { where } from 'sequelize/types';
import { Cliente, ClienteI } from '../models/cliente';

export class ClienteController {
    public async test(req: Request, res: Response) {
      try {
        res.send('Hola, método test para Cliente');
      } catch (error) {
        res.status(500).send(error);
      }
    }

    public async getClienteById(req: Request, res:Response){
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
            } else {res.status(300).json({msg: "El Cliente no existe"})}

        } catch (error) {
            res.status(500).json({msg: "Error Internal"})
        }
    }

    public async createCliente(req: Request, res: Response) {
        const {
          nombre,
          documento,
          telefono,
          correo,
          direccion
        } = req.body;
    
        try {
          let body:ClienteI={
            nombre,
            documento,
            telefono,
            correo,
            direccion
          }
          const newCliente = await Cliente.create({...body});
        } catch (error) {
          res.status(500).json({ error: 'Error al crear el cliente', details: error });
        }
      }
  
    public async getAllCliente(req: Request, res: Response) {
      try {
        const clientes: ClienteI[] = await Cliente.findAll();
        res.status(200).json({ clientes });
      } catch (error) {
        res.status(500).json({error: "Error fetching clientes"});
      }
    }

  }