import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/db";


export interface ClienteI {
  id?: number;
  nombre: string;
  direccion: string;
  telefono: string;
  correo: string;
  password: string;
  estado: "ACTIVO" | "INACTIVO"; // Cambiado a ENUM
}

export class Cliente extends Model{
  public id!: number;
  public nombre!: string;
  public direccion!: string;
  public telefono!: string;
  public correo!: string;
  public password!: string;
  public estado!: "ACTIVO" | "INACTIVO"; // Cambiado a ENUM
}

Cliente.init(
  {
    nombre: {
      type: DataTypes.STRING,
      allowNull: true
      
    },
    direccion: {
      type: DataTypes.STRING,
      allowNull: true
    },
    telefono: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        notEmpty: { msg: "El teléfono no puede estar vacío" },
        len: { args: [10, 15], msg: "El teléfono debe tener entre 10 y 15 caracteres" },
      },
    },
    correo: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
      
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true,
      
    },
    estado: {
      type: DataTypes.ENUM("ACTIVO", "INACTIVO"), // Cambiado a ENUM
      defaultValue: "ACTIVO", // Valor por defecto
    },
  },
  {
    sequelize,
    modelName: "Cliente",
    tableName: "clientes",
    timestamps: false
  }
);
