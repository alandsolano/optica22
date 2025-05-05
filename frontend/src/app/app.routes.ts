import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ClienteRegistroComponent } from './components/cliente-registro/cliente-registro.component';
import { ConsultaRegistroComponent } from './components/consulta-registro/consulta-registro.component';
import { FormulaRegistroComponent } from './components/formula-registro/formula-registro.component';
import { VentaRegistroComponent } from './components/venta-registro/venta-registro.component';
import { BuscarClienteComponent } from './components/buscar-cliente/buscar-cliente.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'cliente-registro', component: ClienteRegistroComponent },
  { path: 'consulta-registro', component: ConsultaRegistroComponent },
  { path: 'formula-registro', component: FormulaRegistroComponent },
  { path: 'venta-registro', component: VentaRegistroComponent },
  { path: 'buscar-cliente', component: BuscarClienteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

