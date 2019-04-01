import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SetorComponent } from './setor.component';
import { SetorDetalheComponent } from './setor-detalhe/setor-detalhe.component';
import { SetorFormComponent } from './setor-form/setor-form.component';

const setorRoutes: Routes = [
    {
        path: 'setor',
        component: SetorComponent,
        children: [
            {
                path: 'lista',
                component: SetorComponent
            },
            {
                path: 'detalhe',
                component: SetorDetalheComponent
            },
            {
                path: 'new',
                component: SetorFormComponent
            },
            {
                path: ':id/edit',
                component: SetorDetalheComponent
            }
        ]
    }

];

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
