import { SetorService } from '../../shared/services/setor.service';
import { LocalDeProva } from '../../shared/local-de-prova';
import { Setor } from '../../shared/setor';
import { HttpClient, HttpHeaders, HttpHeaderResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SetorConcursoProvaService {

  constructor(
    private setorService: SetorService,
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
