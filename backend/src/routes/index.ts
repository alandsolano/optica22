import { ClienteRoutes } from './cliente';
import { ConsultaRoutes } from './consulta';
import { FormulaOpticaRoutes } from './formula';
import { VentaRoutes } from './venta';
import { LenteRoutes } from './lente';
import { DetalleVentaLenteRoutes } from './detalle_venta';

export class Routes {
  public clienteRoutes: ClienteRoutes = new ClienteRoutes();
  public consultaRoutes: ConsultaRoutes = new ConsultaRoutes();
  public formulaOpticaRoutes: FormulaOpticaRoutes = new FormulaOpticaRoutes();
  public ventaRoutes: VentaRoutes = new VentaRoutes();
  public lenteRoutes: LenteRoutes = new LenteRoutes();
  public detalleVentaLenteRoutes: DetalleVentaLenteRoutes = new DetalleVentaLenteRoutes();

}