import { Usuario } from './../usuario';
import { TokenApiService } from './token/interceptadores/token-api.service';
import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Token } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClientModule) { }

logar(): Observable<boolean> {
  const url = 'http://localhost:8080/sigconcursos-1.0.0/login';
  return this.http.post(url).pipe(
    map((resposta: TokenApiService) => {
      if(!this)
    })
  )
}

criarSessao(token: string) {
  try {
    const usuario: Usuario = jwtDecode(token);
  }
}

}
