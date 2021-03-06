import { DefinicaoSalaProva } from './../definicao-sala-prova';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DefinicaoSalaProvaService {

  private headers: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  private params: HttpParams = new HttpParams();

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<DefinicaoSalaProva[]> {
    return this.http.get<DefinicaoSalaProva[]>(`./../api/direct_request_v2/gerencial/supervisor/distribuicao_salas/definicao_salas/listar`);
  }

  getAllByIdSetor(idSetor):Observable<DefinicaoSalaProva[]> {
    return this.http.get<DefinicaoSalaProva[]>(`./../api/direct_request_v2/gerencial/supervisor/distribuicao_salas/definicao_salas/buscar_por_setor`, {params: this.params.set('idSetor', `${idSetor}`)});
  }

  getAllByIdSetorIdConcursoIdEtapaProva(idSetor, idConcurso, idEtapaProva):Observable<DefinicaoSalaProva[]> {
    return this.http.get<DefinicaoSalaProva[]>(`./../api/direct_request_v2/gerencial/supervisor/distribuicao_salas/definicao_salas/buscar_por_setor_concurso_etapa_prova`, {params: this.params.append('idSetor', `${idSetor}`).append('idConcurso', `${idConcurso}`).append('idEtapaProva', `${idEtapaProva}`)});
  }

  updateAll(definicaoSalaProva: DefinicaoSalaProva[]): Observable<DefinicaoSalaProva[]> {
    return this.http.put<DefinicaoSalaProva[]>('./../api/direct_request_v2/gerencial/supervisor/distribuicao_salas/definicao_salas/atualizar_multiplos', definicaoSalaProva, {headers: this.headers});
  }
}
