import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SetorRoutingModule } from './setor-routing.module';

import { SetorComponent } from './setor.component';
import { SetorFormComponent } from './setor-form/setor-form.component';
import { SetorDetalheComponent } from './setor-detalhe/setor-detalhe.component';

import { SetorService } from './shared/setor.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    SetorComponent,
    SetorFormComponent,
    SetorDetalheComponent
  ],
  imports: [
    SetorRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [
    SetorService
  ]
})
export class SetorModule { }
