import { LocalDeProva } from './local-de-prova';
import { Setor } from './setor';
import { HttpClient, HttpHeaders, HttpHeaderResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SetorService {

  setores: Setor[];
  setor: Setor;

  localDeProva: LocalDeProva;

  private headers: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) { }

  getSetores(): Observable<Setor[]> {
    return this.http.get<Setor[]>('./../api/direct_request_v2/gerencial/supervisor/distribuicao_salas/setor/buscar');
  }

  getSetoresP(): Promise<Setor[]> {
    return this.http.get('./../api/direct_request_v2/gerencial/supervisor/distribuicao_salas/setor/buscar').toPromise()
      .then(response => response as Setor[]);
  }

  getSetor(id: number): Observable<Setor> {
    return this.http.get<Setor>(`./../api/direct_request_v2/gerencial/supervisor/distribuicao_salas/setor/buscar/${id}`);
    //return this.getSetores().forEach(id => setor == Setor.id);
  }

  getLocaisDeProva(): Observable<LocalDeProva[]> {
    return this.http.get<LocalDeProva[]>('./../api/direct_request_v2/local_prova');
  }

  getLocalDeProva(id: number): Observable<LocalDeProva> {
    return this.http.get<LocalDeProva>(`./../api/direct_request_v2/local_prova/${id}`);
  }

  salvarSetor(setor: Setor): Observable<Setor> {
    return this.http.post<Setor>('./../api/direct_request_v2/gerencial/supervisor/distribuicao_salas/setor/salvar', setor, {headers: this.headers});
    //return this.http.post<Setor>('./../api/direct_request_v2/teste/setor/salvar', JSON.stringify(setor));
  }

  atualizarSetor(setor: Setor): Observable<Setor> {
    return this.http.put<Setor>('./../api/direct_request_v2/gerencial/supervisor/distribuicao_salas/setor/atualizar', setor, {headers: this.headers});
    //return this.http.put<Setor>('./../api/direct_request_v2/teste/setor/atualizar', JSON.stringify(setor));
  }

  deletarSetor(setor: Setor): Observable<number> {
    return this.http.delete<number>('');
  }

}
