import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { DistribuicaoSalaProvaRoutingModule } from './distribuicao-sala-prova-routing.module';
import { DistribuicaoSalaProvaComponent } from './distribuicao-sala-prova.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [DistribuicaoSalaProvaComponent],
  imports: [
    CommonModule,
    DistribuicaoSalaProvaRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule
  ]
})
export class DistribuicaoSalaProvaModule { }
