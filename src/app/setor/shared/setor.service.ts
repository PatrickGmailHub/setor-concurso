import { Setor } from './setor';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SetorService {

  setores: Setor[];
  setor: Setor;

  constructor(private http: HttpClient) { }

  getSetores(): Observable<Setor[]> {
    return this.http.get<Setor[]>('https://jsonplaceholder.typicode.com/posts');
  }

  getSetor(id: number): Observable<Setor> {
    return this.http.get<Setor>(`https://jsonplaceholder.typicode.com/posts/${id}`);
    //return this.getSetores().forEach(id => setor == Setor.id);
  }

}
