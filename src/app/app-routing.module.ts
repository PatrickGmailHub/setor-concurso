import { DefinicaoSalaProvaModule } from './definicao-sala-prova/definicao-sala-prova.module';
import { DefinicaoSalaProva } from './shared/definicao-sala-prova';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'setor/lista',
    pathMatch: 'full'
  },
  {
    path: 'setor',
    loadChildren: './setor/setor.module#SetorModule'
  },
  {
    path: 'setor-prova',
    loadChildren: './setor-concurso-prova/setor-concurso-prova.module#SetorConcursoProvaModule'
  },
  {
    path: 'definicao-sala-prova',
    loadChildren: './definicao-sala-prova/definicao-sala-prova.module#DefinicaoSalaProvaModule'
  }
];

@NgModule({
  declarations:[],
  imports: [
    RouterModule.forRoot(routes, { useHash: true }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
