import { Model, DataTypes } from "sequelize";
import { sequelize } from "../database/db";
import { Venta } from "./venta";
import { FormulaOptica } from "./formula";

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

  Consulta.hasOne(FormulaOptica, {
    foreignKey: "consultaId",
    as: "formulaOptica",
  });
  
  FormulaOptica.belongsTo(Consulta, {
    foreignKey: "consultaId",
    as: "consulta",
  });
  
  Consulta.hasOne(Venta, {
    foreignKey: "consultaId",
    as: "venta",
  });
  
  Venta.belongsTo(Consulta, {
    foreignKey: "consultaId",
    as: "consulta",
  });