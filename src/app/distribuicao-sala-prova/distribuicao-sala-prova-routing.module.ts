import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { DistribuicaoSalaProvaComponent } from './distribuicao-sala-prova.component';

const distribuicaoSalaProvaRoutes: Routes = [
  {
    path: 'distribuicao-sala-prova/lista',
    component: DistribuicaoSalaProvaComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(distribuicaoSalaProvaRoutes),
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class DistribuicaoSalaProvaRoutingModule { }
