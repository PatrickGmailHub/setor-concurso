import { LocalDeProva } from './../../shared/local-de-prova';
import { LocalDeProvaService } from './../../shared/services/local-de-prova.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SetorService } from 'src/app/shared/services/setor.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-setor-concurso-prova-form',
  templateUrl: './setor-concurso-prova-form.component.html',
  styleUrls: ['./setor-concurso-prova-form.component.css']
})
export class SetorConcursoProvaFormComponent implements OnInit {

  local: LocalDeProva;
  locais: LocalDeProva[] = [];
  locaisDeProva: LocalDeProva[] = [];

  constructor(
    private setorService: SetorService,
    private localDeProvaService: LocalDeProvaService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {

    this.localDeProvaService.getAll().toPromise()
      .then(locaisDeProva => {
        this.locaisDeProva = locaisDeProva;

        this.locaisDeProva.forEach(element => delete element['created_at'])
        this.locaisDeProva.forEach(element => delete element['updated_at'])
        this.locaisDeProva.forEach(element => delete element['deleted'])
        this.locaisDeProva.forEach(element => delete element['version'])

        this.locaisDeProva.forEach(element => {
          this.local.id = element['id'];
          this.local.nome = element['nome'];

          this.locais.push(this.local);

        });

        // this.locaisDeProva = this.locais;

        console.log(this.locais);
      });

  }



}
