import { Setor } from '../shared/setor';
import { LocalDeProva } from '../shared/local-de-prova';
import { LocalDeProvaService } from '../shared/services/local-de-prova.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SetorService } from 'src/app/shared/services/setor.service';
import { Location } from '@angular/common';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-setor-concurso-prova',
  templateUrl: './setor-concurso-prova.component.html',
  styleUrls: ['./setor-concurso-prova.component.css']
})
export class SetorConcursoProvaComponent implements OnInit {

  local: LocalDeProva;
  locais: LocalDeProva[] = [];
  locaisDeProva: LocalDeProva[] = [];

  setor: Setor;
  setores: Setor[] = [];
  setoresAux: Setor[] = [];

  mostraTabela: boolean = false;

  inscricao: Subscription;

  constructor(
    private setorService: SetorService,
    private localDeProvaService: LocalDeProvaService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {

    this.setor = new Setor();

    this.localDeProvaService.getAll().toPromise()
      .then(locaisDeProva => {
        this.locaisDeProva = locaisDeProva;
        
        this.locaisDeProva.forEach(element => {

          delete element['version'];
          delete element['created_at'];
          delete element['updated_at'];
          delete element['deleted'];

        });

        // console.log(this.locaisDeProva);
      });

  }

  selectSetor(valor) {

    this.setores = [];

    this.setorService.getSetores().subscribe(setores => {
        setores.filter(element => {

          delete element['version'];
          delete element['created_at'];
          delete element['updated_at'];
          delete element['deleted'];
          delete element.localDeProva['version'];
          delete element.localDeProva['created_at'];
          delete element.localDeProva['updated_at'];
          delete element.localDeProva['deleted'];

          if(element.localDeProva.id == valor['id']) {
            this.setores.push(element);
            this.mostraTabela = true;
          }

        });
    });

    /* this.setorService.getSetores().pipe<Setor[]>(
      // this.setores = await setores.filter(element => element.localDeProva.id == valor['id'])
      find(element => element.localDeProva.id == valor['id'])
    ).subscribe(element1 => this.setores) */

    // console.log(this.setores)

  }



}
