import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SetorComponent } from './setor.component';
import { SetorDetalheComponent } from './setor-detalhe/setor-detalhe.component';
import { SetorFormComponent } from './setor-form/setor-form.component';

const setorRoutes: Routes = [
    {
        path: 'setor/lista',
        component: SetorComponent
    },
    {
        path: 'setor/detalhe',
        component: SetorDetalheComponent
    },
    {
        path: 'setor/new',
        component: SetorFormComponent
    },
    {
        path: 'setor/:id/edit',
        component: SetorFormComponent
        //component: SetorDetalheComponent
    },
    {
        path: 'setor/:id/detalhe',
        component: SetorDetalheComponent
    }

]

@NgModule({
  imports: [
      RouterModule.forChild(setorRoutes),
      CommonModule
    ],
    exports:[
        RouterModule
    ]
})
export class SetorRoutingModule { }
