import { Setor } from './setor';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})
export class SetorService {

  setores: Setor[];
  setor: Setor;

  constructor(private http: HttpClient) { }

  getSetores(): Observable<Setor[]> {
    return this.http.get<Setor[]>('./../api/direct_request_v2/teste/setor/buscar');
  }

  getSetor(id: number): Observable<Setor> {
    return this.http.get<Setor>(`./../api/direct_request_v2/teste/setor/buscar/${id}`);
    //return this.getSetores().forEach(id => setor == Setor.id);
  }



}
