import { Setor } from './setor';
import { HttpClient, HttpHeaders, HttpHeaderResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

//import 'rxjs/add/operator/toPromise';


@Injectable({
  providedIn: 'root'
})
export class SetorService {

  setores: Setor[];
  setor: Setor;
  private headers: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) { }

  getSetores(): Observable<Setor[]> {
    return this.http.get<Setor[]>('./../api/direct_request_v2/teste/setor/buscar');
  }

  getSetor(id: number): Observable<Setor> {
    return this.http.get<Setor>(`./../api/direct_request_v2/teste/setor/buscar/${id}`);
    //return this.getSetores().forEach(id => setor == Setor.id);
  }

  salvarSetor(setor: Setor): Observable<Setor> {
    return this.http.post<Setor>('./../api/direct_request_v2/teste/setor/salvar', JSON.stringify(setor), {headers: this.headers});
  }

  atualizarSetor(setor: Setor): Observable<Setor> {
    return this.http.put<Setor>('./../api/direct_request_v2/teste/setor/atualizar', setor);
  }

  deletarSetor(setor: Setor): Observable<number> {
    return this.http.delete<number>('');
  }


}
