import { SetorConcursoProva } from './../setor-concurso-prova';
import { EtapaProva } from './../etapa-prova';
import { SetorService } from './setor.service';
import { LocalDeProva } from '../local-de-prova';
import { Setor } from '../setor';
import { HttpClient, HttpHeaders, HttpHeaderResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SetorConcursoProvaService {

  private headers: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(
    // private setorConcursoProva: SetorConcursoProva,
    // private setorService: SetorService,
    // private localDeProva: LocalDeProva,
    private http: HttpClient
  ) { }

  getAll() {
    // return this.setorService.getSetores();
  }

  getById(id: number) {
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
