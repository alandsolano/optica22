import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";

export class Venta extends Model {
    public fechaVenta!: Date;
    public totalVenta!: number;
    public formaPago!: string;
    public consultaId!: number;
  }

  Venta.init(
    {
      fechaVenta: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      totalVenta: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      formaPago: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      consultaId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: "ventas",
      sequelize: database,
      timestamps: true,
    }
  );