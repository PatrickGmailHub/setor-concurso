import { SetorConcursoProvaService } from './../shared/services/setor-concurso-prova.service';
import { SetorConcursoProva } from './../shared/setor-concurso-prova';
import { EtapaProvaService } from './../shared/services/etapa-prova.service';
import { Concurso } from 'src/app/shared/concurso';
import { Setor } from '../shared/setor';
import { LocalDeProva } from '../shared/local-de-prova';
import { LocalDeProvaService } from '../shared/services/local-de-prova.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SetorService } from 'src/app/shared/services/setor.service';
import { Location } from '@angular/common';
import { Observable, Subscription, pipe, Subscriber } from 'rxjs';
import { ConcursoService } from '../shared/services/concurso.service';
import { EtapaProva } from '../shared/etapa-prova';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-setor-concurso-prova',
  templateUrl: './setor-concurso-prova.component.html',
  styleUrls: ['./setor-concurso-prova.component.css']
})
export class SetorConcursoProvaComponent implements OnInit {

  setorConcursoProva: SetorConcursoProva;

  modal: string;

  local: LocalDeProva;
  locais: LocalDeProva[] = [];
  locaisDeProva: LocalDeProva[] = [];

  setor: Setor;
  setores: Setor[] = [];
  setoresAux: Setor[] = [];

  concursos: Concurso[] = [];
  concursoAtivo: Concurso;

  etapaProvas: EtapaProva[] = [];
  etapa: EtapaProva;
  
  mostraTabela: boolean = false;
  mostraForm: boolean = false;

  localTemp: any;

  inscricao: Subscription;

  constructor(
    private setorService: SetorService,
    private localDeProvaService: LocalDeProvaService,
    private concursoService: ConcursoService,
    private etapaProvaService: EtapaProvaService,
    private setorConcursoProvaService: SetorConcursoProvaService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit() {

    this.modal = ""
    this.setor = new Setor();

    this.setorConcursoProva = new SetorConcursoProva();

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
    // this.localTemp = valor
    this.mostraForm = false;

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


  preencherForm(localSel: Setor) {
    this.mostraForm = true;
    this.localTemp = localSel;



    this.setorConcursoProva.setor = localSel;

    this.concursoService.getAll().toPromise()
      .then(result => this.concursos = result.filter(result => result.tipoConcurso.id == 2))
      .then(result => this.setorConcursoProva.concurso = result[0])

    this.etapaProvaService.getAll().toPromise()
      .then((result) => this.etapaProvas = result);

  }

  onVoltar() {
    this.mostraForm = false;
  }

  async onSubmit(f) {

    console.log(this.setorConcursoProva);


    let teste: any = {};

    teste = {
      "setor": {
        "id": this.setorConcursoProva.setor.id
      },
      "concurso": {
        "id": this.setorConcursoProva.concurso.id
      },
      "etapaProva": {
        "id": this.setorConcursoProva.etapaProva.id
      },
      "qtdCarteiraSala": this.setorConcursoProva.qtdCarteiraSala,
      "qtdSalaProva": this.setorConcursoProva.qtdSalaProva,
      "salaInicio": this.setorConcursoProva.salaInicio
    }

    const dados = await this.setorConcursoProvaService.create(teste).toPromise()
      .then(() => console.log(dados));

    this.modal = "modal"  

    this.router.navigate['/setor-concurso/lista'];
    
  }

}
