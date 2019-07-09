import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { DefinicaoSalaProvaRoutingModule } from './definicao-sala-prova-routing.module';
import { DefinicaoSalaProvaComponent } from './definicao-sala-prova.component';

@NgModule({
  declarations: [DefinicaoSalaProvaComponent],
  imports: [
    CommonModule,
    DefinicaoSalaProvaRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class DefinicaoSalaProvaModule { }
