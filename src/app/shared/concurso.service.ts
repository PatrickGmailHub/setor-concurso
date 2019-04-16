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

  }

  getById(id: number) {

  }

  update() {

  }

  delete(id: number) {

  }
}
