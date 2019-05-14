import { Params } from '@angular/router';
import { LocalDeProva } from '../local-de-prova';
import { Setor } from '../setor';
import { HttpClient, HttpHeaders, HttpHeaderResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LocalDeProvaService } from '../services/local-de-prova.service';

@Injectable({
  providedIn: 'root'
})
export class SetorService {

  setores: Setor[];
  setor: Setor;

  localDeProva: LocalDeProva;

  private headers: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  private params: HttpParams = new HttpParams();
  // private params: HttpParams = new HttpParams({});

  constructor(
    private http: HttpClient,
    private localDeProvaService: LocalDeProvaService
    ) { }

  getSetores(): Observable<Setor[]> {
    return this.http.get<Setor[]>('./../api/direct_request_v2/gerencial/supervisor/distribuicao_salas/setor/buscar');
  }

  getSetoresP(): Promise<Setor[]> {
    return this.http.get('./../api/direct_request_v2/gerencial/supervisor/distribuicao_salas/setor/buscar').toPromise()
      .then(response => response as Setor[]);
  }

  getAllByLocalProva(idLocalProva: number): Observable<Setor[]> {
    return this.http.get<Setor[]>('./../api/direct_request_v2/gerencial/supervisor/distribuicao_salas/setor/buscar_setor_por_local_prova', {params: this.params.set('idLocalDeProva',`${idLocalProva}`)});
  }

  getSetor(id: number): Observable<Setor> {
    return this.http.get<Setor>(`./../api/direct_request_v2/gerencial/supervisor/distribuicao_salas/setor/buscar/${id}`);
    //return this.getSetores().forEach(id => setor == Setor.id);
  }

  getLocaisDeProva(): Observable<LocalDeProva[]> {
    // return this.http.get<LocalDeProva[]>('./../api/direct_request_v2/local_prova');
    return this.localDeProvaService.getAll();
  }

  getLocalDeProva(id: number): Observable<LocalDeProva> {
    // return this.http.get<LocalDeProva>(`./../api/direct_request_v2/local_prova/${id}`);
    return this.localDeProvaService.getById(id);
  }

  salvarSetor(setor: Setor): Observable<Setor> {
    return this.http.post<Setor>('./../api/direct_request_v2/gerencial/supervisor/distribuicao_salas/setor/salvar', setor, {headers: this.headers});
    //return this.http.post<Setor>('./../api/direct_request_v2/teste/setor/salvar', JSON.stringify(setor));
  }

  atualizarSetor(setor: Setor): Observable<Setor> {
    return this.http.put<Setor>('./../api/direct_request_v2/gerencial/supervisor/distribuicao_salas/setor/atualizar', setor, {headers: this.headers});
    //return this.http.put<Setor>('./../api/direct_request_v2/teste/setor/atualizar', JSON.stringify(setor));
  }

  deletarSetor(id: number): Observable<number> {
    // return this.http.delete<Setor>('./../api/direct_request_v2/gerencial/supervisor/distribuicao_salas/setor/apagar', {headers: this.headers});
    return this.http.delete<number>(`./../api/direct_request_v2/gerencial/supervisor/distribuicao_salas/setor/apagar/${id}`, {headers: this.headers});
    // return this.http.request<any>('delete', './../api/direct_request_v2/gerencial/supervisor/distribuicao_salas/setor/apagar', {headers: this.headers, body: `{"id": ${id}}`});
    // return this.http.request<any>('delete', './../api/direct_request_v2/gerencial/supervisor/distribuicao_salas/setor/apagar', {headers: this.headers, body: id});
    // return this.http.request<any>('delete', './../api/direct_request_v2/gerencial/supervisor/distribuicao_salas/setor/apagar', {body: id});
  }

}
