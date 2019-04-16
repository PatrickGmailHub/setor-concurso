import { LocalDeProva } from './../../setor/shared/local-de-prova';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalDeProvaService {

  private headers: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(
    private http: HttpClient
  ) { }

  getAll() {
    return this.http.get<LocalDeProva[]>('./../api/direct_request_v2/local_prova');
  }

  getById(id: number) {
    return this.http.get<LocalDeProva>(`./../api/direct_request_v2/local_prova/${id}`);
  }

  update() {

  }

  delete(id: number) {

  }

}
