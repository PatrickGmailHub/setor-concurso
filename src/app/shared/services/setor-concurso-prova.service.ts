import { Params } from '@angular/router';
import { SetorConcursoProva } from './../setor-concurso-prova';
import { EtapaProva } from './../etapa-prova';
import { SetorService } from './setor.service';
import { LocalDeProva } from '../local-de-prova';
import { Setor } from '../setor';
import { HttpClient, HttpHeaders, HttpHeaderResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SetorConcursoProvaService {

  private headers: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'})
  private params: HttpParams = new HttpParams();

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<SetorConcursoProva[]> {
    // return this.setorService.getSetores();
    return this.http.get<SetorConcursoProva[]>('./../api/direct_request_v2/gerencial/supervisor/distribuicao_salas/setor_concurso_prova');
  }

  getAllByLocalProva(idLocalProva: number): Observable<SetorConcursoProva[]> {
    // return this.setorService.getSetores();
    return this.http.get<SetorConcursoProva[]>('./../api/direct_request_v2/gerencial/supervisor/distribuicao_salas/setor_concurso_prova/setores_distribuidos_por_local', {params: this.params.set('idLocalDeProva', `${idLocalProva}`)});
  }

  getById(id: number): Observable<SetorConcursoProva> {
    return null;
  }

  // create(setorConcursoProva: any): Observable<any> {
  //   return this.http.post<any>('./../api/direct_request_v2/gerencial/supervisor/distribuicao_salas/setor_concurso_prova/salvar', setorConcursoProva, {headers: this.headers});
  // }

  create(setorConcursoProva: SetorConcursoProva): Observable<SetorConcursoProva> {
    return this.http.post<SetorConcursoProva>('./../api/direct_request_v2/gerencial/supervisor/distribuicao_salas/setor_concurso_prova/salvar', setorConcursoProva, {headers: this.headers});
  }

  update() {

  }

  delete() {
    
  }

}
