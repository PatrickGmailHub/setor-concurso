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

  constructor(
    private setorService: SetorService,
    private localDeProva: LocalDeProva,
    private http: HttpClient
  ) { }

  getAll() {
    return this.setorService.getSetores();
  }

  getById(id: number) {
    return null;
  }

  update() {

  }

  delete() {
    
  }

}