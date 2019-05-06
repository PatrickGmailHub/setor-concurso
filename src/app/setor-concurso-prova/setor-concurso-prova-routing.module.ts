import { SetorConcursoProvaOrgComponent } from './setor-concurso-prova-org/setor-concurso-prova-org.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SetorConcursoProvaComponent } from './setor-concurso-prova.component';
import { SetorConcursoProvaFormComponent } from './setor-concurso-prova-form/setor-concurso-prova-form.component';

const setorConcursoProvaRoutes: Routes = [
  {
      path: 'setor-concurso/lista',
      component: SetorConcursoProvaComponent
  },
  {
    path: 'setor-concurso/edit',
    component: SetorConcursoProvaOrgComponent
  },
  /* {
      path: 'setor-concurso/new',
      component: SetorConcursoProvaListaComponent
  }, */
  {
      path: 'setor-concurso/:id/edit',
      component: SetorConcursoProvaFormComponent
  },
  

]

@NgModule({
  imports: [
    RouterModule.forChild(setorConcursoProvaRoutes),
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class SetorConcursoProvaRoutingModule { }
