import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'setor',
    pathMatch: 'full'
  },
  {
    path: 'setor',
    loadChildren: './setor/setor.module#SetorModule'
  }
];

@NgModule({
  declarations:[],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
