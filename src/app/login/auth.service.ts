import { Usuario } from './../usuario';
import { Injectable, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutencado = false;

  @Output() mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario) {

    if (usuario.nome ==='123456' && usuario.password === '123456') {

      this.usuarioAutencado = true;

      this.mostrarMenuEmitter.emit(true);

      this.router.navigate(['/']);

    } else {

      this.usuarioAutencado = false;

      this.mostrarMenuEmitter.emit(false);

    }

  }

  usuarioEstaAutenticado() {
    return this.usuarioAutencado;
  }

}
