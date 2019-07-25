import { Params } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Inscricao } from '../inscricao';
import { Observable } from 'rxjs';
import { Setor } from '../setor';

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

  getAllSetoresNaoDistribuidos(): Observable<number[]> {
    return this.http.get<number[]>(`./../api/direct_request_v2/inscricao/setores_sem_inscritos`);
  }

<<<<<<< HEAD
  getAllSetoresNaoDistribuidosPorLocal(idLocal: number): Observable<number[]> {
    return this.http.get<number[]>(`./../api/direct_request_v2/inscricao/setores_sem_inscritos_por_local_prova`, {params: this.params.set('idLocalDeProva', `${idLocal}`)});
  }

=======
>>>>>>> 358d453f1e26945ad0fa8c4a66bd2d815a88f0b2
}
