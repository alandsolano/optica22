import { Sequelize, Dialect } from "sequelize";
import dotenv from "dotenv";
/*
dotenv.config();

const dbConfig = {
  mysql: {
    dialect: "mysql",
    host: process.env.DB_HOST || "localhost",
    username: process.env.DB_USER || "alan",
    password: process.env.DB_PASSWORD || "alan",
    database: process.env.DB_NAME || "optica",
    port: parseInt(process.env.DB_PORT || "3306")
  },
  postgres: {
    dialect: "postgres",
    host: process.env.DB_HOST || "localhost",
    username: process.env.DB_USER || "postgres",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_NAME || "test",
    port: parseInt(process.env.DB_PORT || "5432")
  },
  mssql: {
    dialect: "mssql",
    host: process.env.DB_HOST || "localhost",
    username: process.env.DB_USER || "sa",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_NAME || "test",
    port: parseInt(process.env.DB_PORT || "1433")
  },
  oracle: {
    dialect: "oracle",
    host: process.env.DB_HOST || "localhost",
    username: process.env.DB_USER || "oracle",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_NAME || "test",
    port: parseInt(process.env.DB_PORT || "1521")
  },
};

// Seleccionar el motor de base de datos desde el archivo .env
const dbEngine = process.env.DB_ENGINE || "mysql";
const config = dbConfig[dbEngine as keyof typeof dbConfig];

if (!config) {
  throw new Error(`Unsupported DB_ENGINE: ${dbEngine}`);
}

// Crear la instancia de Sequelize
export const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect as any,
});

*/

dotenv.config();
const DB_DIALECT = process.env.DB_DIALECT;
const DB_NAME = String(process.env.DB_NAME) ;
const DB_USER = String(process.env.DB_USER) ;
const DB_PASS = process.env.DB_PASS ;
const DB_HOST = process.env.DB_HOST ;
const DB_PORT = Number(process.env.DB_PORT);

export const database = new Sequelize(
    DB_NAME,
    DB_USER,
    DB_PASS,

    {
        host: DB_HOST,
        dialect: DB_DIALECT as Dialect,
        port: DB_PORT
    }

);


async function generateDb() {
    await database.sync({ alter: true })
    console.log('Base de datos y tablas creada');
}

generateDb();