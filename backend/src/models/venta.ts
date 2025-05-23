import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";
import { Lente } from "./lente";
import { DetalleVentaLente } from "./detalle_venta";

export class Venta extends Model {
    public fechaVenta!: Date;
    public totalVenta!: number;
    public formaPago!: string;
    public consultaId!: number;
  }

  export interface VentaI{
    fechaVenta: Date;
    totalVenta: number;
    formaPago: string;
    consultaId: number;
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
        sequelize: database,
        modelName:"venta",
      tableName: "ventas",
      timestamps: false
    }
  );

  // Modelo Venta
Venta.belongsToMany(Lente, {
  through: DetalleVentaLente,
  foreignKey: "idVenta",
  otherKey: "idLente",
  as: "lentes",
});

Lente.belongsToMany(Venta, {
  through: DetalleVentaLente,
  foreignKey: "idLente",
  otherKey: "idVenta",
  as: "ventas",
});