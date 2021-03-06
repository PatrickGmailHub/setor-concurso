import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SetorConcursoProvaRoutingModule } from './setor-concurso-prova-routing.module';
import { SetorConcursoProvaComponent } from './setor-concurso-prova.component';
import { SetorConcursoProvaFormComponent } from './setor-concurso-prova-form/setor-concurso-prova-form.component';
import { SetorConcursoProvaService } from '../shared/services/setor-concurso-prova.service';
import { SetorConcursoProvaOrgComponent } from './setor-concurso-prova-org/setor-concurso-prova-org.component';

@NgModule({
  declarations: [
    SetorConcursoProvaComponent,
    SetorConcursoProvaFormComponent,
    SetorConcursoProvaOrgComponent
  ],
  imports: [
    CommonModule,
    SetorConcursoProvaRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    // SetorConcursoProvaService
  ]
})
export class SetorConcursoProvaModule { }
