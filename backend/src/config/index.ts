import dotenv from "dotenv";
import express, { Application } from "express";
import morgan from "morgan";
import cors from "cors";
import { sequelize } from "../database/db";

// Cargar variables de entorno desde el archivo .env
dotenv.config();

export class App {
  public app: Application;

  constructor(private port?: number | string) {
    this.app = express();

    this.settings();
    this.middlewares();
    this.routes();
    this.dbConnection(); // Llamar al método de conexión a la base de datos
  }

  // Configuración de la aplicación
  private settings(): void {
    this.app.set('port', this.port || process.env.PORT || 4000);
  }

  // Configuración de middlewares
  private middlewares(): void {
    this.app.use(morgan('dev'));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  }

  // Configuración de rutas
  private routes(): void {
     
  }

  // Método para conectar y sincronizar la base de datos
  private async dbConnection(): Promise<void> {
    try {
      await sequelize.sync({ force: true }); // Sincronizar la base de datos
      console.log("Database connected successfully");
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  }

  // Iniciar el servidor
  async listen() {
    await this.app.listen(this.app.get('port'));
    console.log('Server on port', this.app.get('port'));
  }
}