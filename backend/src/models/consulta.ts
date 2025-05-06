import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";

export class Consulta extends Model {
    public fechaConsulta!: Date;
    public motivo!: string;
    public diagnostico!: string;
    public observaciones!: string;
    public clienteId!: number;
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
      tableName: "consultas",
      sequelize: database,
      timestamps: true,
    }
  );