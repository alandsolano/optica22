import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";

export class DetalleVentaLente extends Model {
    public cantidad!: number;
    public subtotal!: number;
    public idVenta!: number;
    public idLente!: number;
  }

  export interface DetalleVentaLenteI{
    cantidad: number;
    subtotal: number;
    idVenta: number;
    idLente: number;
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
        sequelize: database,
        modelName:"detalle_venta",
      tableName: "detalles_ventas_lentes",
      timestamps: false
    }
  );