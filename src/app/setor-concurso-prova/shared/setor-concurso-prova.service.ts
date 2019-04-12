import { SetorService } from './../../setor/shared/setor.service';
import { LocalDeProva } from '../../setor/shared/local-de-prova';
import { Setor } from '../../setor/shared/setor';
import { HttpClient, HttpHeaders, HttpHeaderResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SetorConcursoProvaService {

  constructor(
    private setorService: SetorConcursoProvaService,
    private http: HttpClient
  ) { }

  getAll() {

  }

  getById() {

  }

  update() {

  }

  delete() {
    
  }

}
