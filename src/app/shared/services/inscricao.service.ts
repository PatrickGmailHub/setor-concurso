import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';

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

  

}
