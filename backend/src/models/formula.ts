import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";

export class FormulaOptica extends Model {
    public ojoDerEsfera!: string;
    public ojoDerCilindro!: string;
    public ojoDerEje!: string;
    public ojoIzqEsfera!: string;
    public ojoIzqCilindro!: string;
    public ojoIzqEje!: string;
    public consultaId!: number;
  }

  FormulaOptica.init(
    {
      ojoDerEsfera: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ojoDerCilindro: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ojoDerEje: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ojoIzqEsfera: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ojoIzqCilindro: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ojoIzqEje: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      consultaId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: "formulas_opticas",
      sequelize: database,
      timestamps: true,
    }
  );