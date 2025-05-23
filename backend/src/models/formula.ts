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

  export interface FormulaOpticaI{
    ojoDerEsfera: string;
    ojoDerCilindro: string;
    ojoDerEje: string;
    ojoIzqEsfera: string;
    ojoIzqCilindro: string;
    ojoIzqEje: string;
    consultaId: number;
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
        sequelize: database,
        modelName:"formula",
      tableName: "formulas_opticas",
      timestamps: false
    }
  );