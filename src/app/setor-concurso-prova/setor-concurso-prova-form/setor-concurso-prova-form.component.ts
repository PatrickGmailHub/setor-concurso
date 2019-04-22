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

    this.local = new LocalDeProva();

    this.localDeProvaService.getAll().toPromise()
      .then(locaisDeProva => {
        this.locaisDeProva = locaisDeProva;
        
        this.locaisDeProva.forEach(element => {
          delete element['version']
          delete element['created_at']
          delete element['updated_at']
          delete element['deleted']

        });

        console.log(this.locaisDeProva);
      });

  }



}
