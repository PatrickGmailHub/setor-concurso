import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor() { }

  confirma(msg?: string) {
    return new Promise(resolve => {
      return resolve(window.confirm(msg || "Confirmar?"))
    });
  }
}
