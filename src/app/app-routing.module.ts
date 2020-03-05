import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//Componentes
import {ContactanosComponent} from './contactanos/contactanos.component'
import{ConocemosComponent} from './conocemos/conocemos.component'
import {EditorialComponent} from './editorial/editorial.component'
import{InicioComponent} from './inicio/inicio.component'
import{LineamientosComponent} from './lineamientos/lineamientos.component'
import {NAnterioresComponent} from './n-anteriores/n-anteriores.component'
import { Numero49Component } from './numero49/numero49.component';
import { Numero48Component } from './numero48/numero48.component';
import { Numero47Component } from './numero47/numero47.component';
import { Numero30Component } from './numero30/numero30.component';
import { Numero34Component } from './numero34/numero34.component';
import { Numero46Component } from './numero46/numero46.component';


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
},
{
  path:  'Numero49',
  component:  Numero49Component
  },
  {
  path:  'Numero48',
  component:  Numero48Component
  },

  {
    path:  'Numero47',
    component:  Numero47Component
    },
    {
      path:  'Numero46',
      component:  Numero46Component
      },
    {
      path:  'Numero30',
      component:  Numero30Component
      },
      {
        path:  'Numero34',
        component:  Numero34Component
        },
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
