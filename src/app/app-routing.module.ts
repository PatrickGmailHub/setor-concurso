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
