import { SetorFormComponent } from './../setor/setor-form/setor-form.component';
import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { IFormCandeactivate } from './iform-candeactivate';

@Injectable()
export class SetorDeactivateGuard implements CanDeactivate<IFormCandeactivate> {

    canDeactivate(
        component: IFormCandeactivate,
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        return true;
    }
}