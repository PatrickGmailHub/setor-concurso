import { Params } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Inscricao } from '../inscricao';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InscricaoService {

  private headers: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  private params: HttpParams = new HttpParams();

  constructor(
    private http: HttpClient
  ) { }

  getAll() {

  }

  getById() {

  }

  getAllInscritosValidosSemSalasSetorPorLocal(idLocal: number):Observable<Inscricao[]> {
    return this.http.get<Inscricao[]>(`./../api/direct_request_v2/inscricao/inscritos_validos_sem_sala`, {params: this.params.set('idLocalDeProva', `${idLocal}`)});
  }

  getAllInscritosValidosSemSalasSetorPorLocalPorQtd(idLocal: number, qtd: number):Observable<Inscricao[]> {
    return this.http.get<Inscricao[]>(`./../api/direct_request_v2/inscricao/inscritos_validos_sem_sala_qtd`, {params: this.params.append('idLocalDeProva', `${idLocal}`).append('qtd', `${qtd}`)});
  }

}
