import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SetorRoutingModule } from './setor-routing.module';

import { SetorComponent } from './setor.component';
import { SetorFormComponent } from './setor-form/setor-form.component';
import { SetorDetalheComponent } from './setor-detalhe/setor-detalhe.component';

import { SetorService } from '../shared/services/setor.service';
import { HttpClientModule } from '@angular/common/http';
import { FormDebugComponent } from './form-debug/form-debug.component';
import { SetorForm1Component } from './setor-form1/setor-form1.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TextMaskModule } from 'angular2-text-mask';

@NgModule({
  declarations: [
    SetorComponent,
    SetorFormComponent,
    SetorDetalheComponent,
    FormDebugComponent,
    SetorForm1Component
  ],
  imports: [
    SetorRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    NgbModule,
    TextMaskModule
  ],
  exports: [SetorComponent],
  providers: [
    // SetorService
  ]
})
export class SetorModule { }
