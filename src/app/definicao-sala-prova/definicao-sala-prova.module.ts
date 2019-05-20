import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefinicaoSalaProvaRoutingModule } from './definicao-sala-prova-routing.module';
import { DefinicaoSalaProvaComponent } from './definicao-sala-prova.component';

@NgModule({
  declarations: [DefinicaoSalaProvaComponent],
  imports: [
    CommonModule,
    DefinicaoSalaProvaRoutingModule
  ]
})
export class DefinicaoSalaProvaModule { }
