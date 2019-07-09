import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpHeaderResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SetorConcursoProva } from '../setor-concurso-prova';

@Injectable({
  providedIn: 'root'
})
export class DistribuicaoSalaProvaService {

  private headers: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'})
  private params: HttpParams = new HttpParams();

  constructor(
    private http: HttpClient
  ) { }

  getAll() {

  }

  getById() {

  }

  getAllByLocalProva(idLocalProva: number): Observable<SetorConcursoProva[]> {
    // return this.setorService.getSetores();
    return this.http.get<SetorConcursoProva[]>('./../api/direct_request_v2/gerencial/supervisor/distribuicao_salas/setor_concurso_prova/setores_distribuidos_por_local', {params: this.params.set('idLocalDeProva', `${idLocalProva}`)});
  }

  getAllByLocalProvaById(id: number): Observable<SetorConcursoProva> {
    return this.http.get<SetorConcursoProva>(`./../api/direct_request_v2/gerencial/supervisor/distribuicao_salas/setor_concurso_prova/buscar/${id}`);
  }

  create() {

  }

  update() {

  }

  delete() {
    
  }
}
