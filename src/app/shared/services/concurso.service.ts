import { Concurso } from '../concurso';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConcursoService {

  private headers: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(
    private http: HttpClient
  ) { }

  getAll() {
    return this.http.get<Concurso[]>('./../api/direct_request_v2/concursos/cadastrados');
  }

  getAllVestibular() {
    return this.getAll().toPromise()
      .then(result => {
        result.filter((ok) => {
          ok.tipoConcurso == 2
        });
      });
  }

  getById(id: number) {
    return this.http.get<Concurso>(`./../api/direct_request_v2/concursos/${id}`);
  }

  update() {

  }

  delete(id: number) {

  }

}
