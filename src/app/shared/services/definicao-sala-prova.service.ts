import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DefinicaoSalaProva } from '../definicao-sala-prova';

@Injectable({
  providedIn: 'root'
})
export class DefinicaoSalaProvaService {

  private headers: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  private params: HttpParams = new HttpParams();

  constructor(
    private http: HttpClient
  ) { }

  getAllByIdSetor(idSetor):Observable<DefinicaoSalaProva[]> {
    return this.http.get<DefinicaoSalaProva[]>(`./../api/direct_request_v2/gerencial/supervisor/distribuicao_salas/definicao_salas/buscar_por_setor`, {params: this.params.set('idSetor', `${idSetor}`)});
  }

  updateAll(definicaoSalaProva: DefinicaoSalaProva[]): Observable<DefinicaoSalaProva[]> {
    return this.http.put<DefinicaoSalaProva[]>('./../api/direct_request_v2/gerencial/supervisor/distribuicao_salas/definicao_salas/atualizar_multiplos', definicaoSalaProva, {headers: this.headers});
  }
}
