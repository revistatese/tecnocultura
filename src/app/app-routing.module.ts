import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//Componentes
import {ContactanosComponent} from './contactanos/contactanos.component'
import{ConocemosComponent} from './conocemos/conocemos.component'
import {EditorialComponent} from './editorial/editorial.component'
import{InicioComponent} from './inicio/inicio.component'
import{LineamientosComponent} from './lineamientos/lineamientos.component'
import {NAnterioresComponent} from './n-anteriores/n-anteriores.component'


const routes: Routes = [
    {
      path:  'Inicio',
      component:  InicioComponent
  },    {
    path:  'Conocenos',
    component:  ConocemosComponent
},
{
  path:  'Lineamientos',
  component:  LineamientosComponent
},
{
  path:  'Editorial',
  component:  EditorialComponent
},
{
  path:  'Contactanos',
  component:  ContactanosComponent
},
{
path:  'Anteriores',
component:  NAnterioresComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
