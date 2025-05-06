import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";

export class DetalleVentaLente extends Model {
    public cantidad!: number;
    public subtotal!: number;
    public idVenta!: number;
    public idLente!: number;
  }

DetalleVentaLente.init(
    {
      cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      subtotal: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      idVenta: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      idLente: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: "detalles_ventas_lentes",
      sequelize: database,
      timestamps: true,
    }
  );