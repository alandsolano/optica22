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

    public async updateCliente(req:Request, res:Response){
      const { id:pk} = req.params;
      const { nombre, documento, telefono, correo, direccion } = req.body;
      try{

        let body:ClienteI={
          nombre,
          documento,
          telefono,
          correo,
          direccion
        }

        const clienteExist = await Cliente.findOne({
          where: {
            id: pk
          }
      });

        if (clienteExist){
          await clienteExist.update(
            body, {
              where: {id:pk}
            }
          );
          res.status(200).json(clienteExist);
        } else {
          res.status(404).json({error: "Cliente no encontrado"});
        }
      } catch (error:any){
        res.status(400).json({error: error.message})
      }
    }

    public async deleteCliente(req: Request, res:Response){

      try{
        const { id } = req.params;
        const clienteToDelete = await Cliente.findByPk(id);

        if (clienteToDelete){
          await clienteToDelete.destroy();
          res.status(200).json({ message: "Cliente deleted succesfully"});
        } else {
          res.status(404).json({ message: "Cliente no encontrado"});
        }
      }catch (error){
        res.status(500).json({ message: "Error al eliminar al cliente"});
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
        const { nombre, documento, telefono, correo, direccion } = req.body;
    
        try {
          let body:ClienteI={
            nombre,
            documento,
            telefono,
            correo,
            direccion
          }
          const newCliente = await Cliente.create({...body});
          res.status(201).json(newCliente);
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