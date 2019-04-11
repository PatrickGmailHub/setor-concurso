import { element } from 'protractor';
import { LocalDeProva } from './shared/local-de-prova';
import { SetorService } from './shared/setor.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Setor } from './shared/setor';

@Component({
  selector: 'app-setor',
  templateUrl: './setor.component.html',
  styleUrls: ['./setor.component.css']
})
export class SetorComponent implements OnInit {

  setores: Setor[];
  setoresAux: Setor[];
  setorjson = {}[0];

  constructor(
    private setorService: SetorService
  ) { }

  ngOnInit() {


    //this.setorService.getSetores().subscribe((setores: Setor[]) => {this.setores = setores}), () => 'Falha';
    //this.setorService.getSetores().toPromise().then((setores: Setor[]) => {this.setores = setores});

    //this.setores = [];
    //this.setoresAux = [];

    this.setorService.getSetores().toPromise()
      .then((setores: Setor[]) => {
        this.setoresAux = setores;

        this.setorjson = JSON.stringify(this.setoresAux);
        this.setorjson = JSON.parse(this.setorjson);
        
        this.setorjson.forEach(element => delete element.version)
        this.setorjson.forEach(element => delete element.deleted)
        this.setorjson.forEach(element => delete element.localDeProva.version)
        this.setorjson.forEach(element => delete element.localDeProva.deleted)
        this.setorjson.forEach(element => delete element.localDeProva.created_at)
        this.setorjson.forEach(element => delete element.localDeProva.updated_at)
        this.setorjson.forEach(element => delete element.created_at)
        this.setorjson.forEach(element => delete element.updated_at)
      }).then(() => this.setores = this.setorjson);
      
  }

  teste() {

    console.log(JSON.stringify(this.setores));
    console.log(JSON.stringify(this.setoresAux));
  }

}
