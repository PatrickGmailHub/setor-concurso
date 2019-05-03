import { EtapaProva } from './../etapa-prova';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EtapaProvaService {

  private headers: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(
    private http: HttpClient
  ) { }

  getAll() {
    return this.http.get<EtapaProva[]>('./../api/direct_request_v2/gerencial/supervisor/distribuicao_salas/etapa_prova/buscar');
  }

}
