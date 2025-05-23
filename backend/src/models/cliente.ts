import { Model, DataTypes } from "sequelize";
//import { sequelize } from "../database/db";
import { Venta } from "./venta";
import { Consulta } from "./consulta";
import { database } from "../database/db";

export class Cliente extends Model {
    
    public id!: number;
    public nombre!: string;
    public documento!: string;
    public telefono!: string;
    public correo!: string;
    public direccion!: string;
  }

  export interface ClienteI{
    nombre: string;
    documento: string;
    telefono: string;
    correo: string;
    direccion: string;    
  }

  Cliente.init(
    {
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      documento: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      telefono: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      correo: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      direccion: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize:database,
      modelName:"cliente",
      tableName: "clientes",
      timestamps: false
    }
  );

  Cliente.hasMany(Consulta, {
    foreignKey: "clienteId",
    as: "consultas",
  });
  
  Consulta.belongsTo(Cliente, {
    foreignKey: "clienteId",
    as: "cliente",
  });
  
  Cliente.hasMany(Venta, {
    foreignKey: "clienteId",
    as: "ventas",
  });
  
  Venta.belongsTo(Cliente, {
    foreignKey: "clienteId",
    as: "cliente",
  });