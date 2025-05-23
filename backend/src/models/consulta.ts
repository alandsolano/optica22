import { Model, DataTypes } from "sequelize";
import { sequelize } from "../database/db";

export class Consulta extends Model {
    
    public id!: number;
    public fechaConsulta!: Date;
    public motivo!: string;
    public diagnostico!: string;
    public observaciones!: string;
    public clienteId!: number;
  }

  export interface ConsultaI{
    fechaConsulta: Date;
    motivo: string;
    diagnostico: string;
    observaciones: string;
    clienteId: number;
  }

  Consulta.init(
    {
      fechaConsulta: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      motivo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      diagnostico: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      observaciones: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      clienteId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
        sequelize,
        modelName:"consulta",
      tableName: "consultas",
      timestamps: false
    }
  );