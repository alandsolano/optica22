import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";

export class Lente extends Model {
    public nombreComercial!: string;
    public tipoLente!: string;
    public material!: string;
    public color!: string;
    public precioUnitario!: number;
  }

  export interface LenteI{
    nombreComercial: string;
    tipoLente: string;
    material: string;
    color: string;
    precioUnitario: number;
  }

Lente.init(
    {
      nombreComercial: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      tipoLente: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      material: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      color: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      precioUnitario: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
    },
    {
      tableName: "lentes",
      sequelize: database,
      timestamps: true,
    }
  );