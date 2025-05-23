import { ClienteRoutes } from './cliente';
import { ConsultaRoutes } from './consulta';
import { FormulaOpticaRoutes } from './formula';
import { VentaRoutes } from './venta';
import { LenteRoutes } from './lente';
import { DetalleVentaLenteRoutes } from './detalle_venta';

import { AuthRoutes } from './authorization/auth';
import { ResourceRoutes } from './authorization/recource';
import { ResourceRoleRoutes } from './authorization/recourceRole';
import { RefreshTokenRoutes } from './authorization/refresk_token';
import { RoleUserRoutes } from './authorization/role_user';
import { RoleRoutes } from './authorization/role';


export class Routes {

  public authRoutes: AuthRoutes = new AuthRoutes();
  public resourceRoutes: ResourceRoutes = new ResourceRoutes();
  public refreshTokenRoutes: RefreshTokenRoutes = new RefreshTokenRoutes();
  public roleUserRoutes: RoleUserRoutes = new RoleUserRoutes();
  public roleRoutes: RoleRoutes = new RoleRoutes();
  public resourceRole: ResourceRoleRoutes = new ResourceRoleRoutes();

  public clienteRoutes: ClienteRoutes = new ClienteRoutes();
  public consultaRoutes: ConsultaRoutes = new ConsultaRoutes();
  public formulaOpticaRoutes: FormulaOpticaRoutes = new FormulaOpticaRoutes();
  public ventaRoutes: VentaRoutes = new VentaRoutes();
  public lenteRoutes: LenteRoutes = new LenteRoutes();
  public detalleVentaLenteRoutes: DetalleVentaLenteRoutes = new DetalleVentaLenteRoutes();



}