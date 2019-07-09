import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { DefinicaoSalaProvaComponent } from './definicao-sala-prova.component';
import { DefinicaoSalaProva } from './../shared/definicao-sala-prova';

const definicaoSalaProvaRoutes: Routes = [
  {
    path: 'definicao-sala-prova/lista',
    component: DefinicaoSalaProvaComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(definicaoSalaProvaRoutes),
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class DefinicaoSalaProvaRoutingModule { }
