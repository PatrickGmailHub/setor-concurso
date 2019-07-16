import { DefinicaoSalaProvaService } from './../shared/services/definicao-sala-prova.service';
import { EtapaProva } from 'src/app/shared/etapa-prova';
import { Concurso } from './../shared/concurso';
import { Setor } from './../shared/setor';
import { DefinicaoSalaProva } from './../shared/definicao-sala-prova';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SetorService } from '../shared/services/setor.service';
import { LocalDeProvaService } from '../shared/services/local-de-prova.service';
import { ConcursoService } from '../shared/services/concurso.service';
import { EtapaProvaService } from '../shared/services/etapa-prova.service';
import { SetorConcursoProvaService } from '../shared/services/setor-concurso-prova.service';
import { Subscription } from 'rxjs';
import { SetorConcursoProva } from '../shared/setor-concurso-prova';
import { LocalDeProva } from '../shared/local-de-prova';
import { element } from '@angular/core/src/render3';

@Component({
  selector: 'app-definicao-sala-prova',
  templateUrl: './definicao-sala-prova.component.html',
  styleUrls: ['./definicao-sala-prova.component.css']
})
export class DefinicaoSalaProvaComponent implements OnInit {

  definicaoSalaProva: DefinicaoSalaProva[] = [];

  setorConcursoProva: SetorConcursoProva;

  locaisDeProva: LocalDeProva[] = [];

  setor: Setor;
  setores: Setor[] = [];
  setoresAux: Setor[] = [];

  concursos: Concurso[] = [];
  concurso: Concurso;
  concursoAtivo: Concurso;

  etapaProvas: EtapaProva[] = [];
  etapa: EtapaProva;

  inscricao: Subscription;

  abrir: boolean = false;
  mesmoId: number;

  page: number = 1;
  pageSize: number = 5;
  collectionSize: number;

  constructor(
    private definicaoSalaProvaService: DefinicaoSalaProvaService,
    private setorService: SetorService,
    private localDeProvaService: LocalDeProvaService,
    private concursoService: ConcursoService,
    private etapaProvaService: EtapaProvaService,
    private setorConcursoProvaService: SetorConcursoProvaService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {

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

      });

  }

  selectSetor(valor) {

    this.abrir = false;

    this.setores = new Array();
    this.setoresAux = new Array();

    this.setorConcursoProvaService.getAllByLocalProva(valor['id']).subscribe(setorConcursoProvas => {
      setorConcursoProvas.forEach(setorConcursoProva => {
        this.setores.push(setorConcursoProva.setor)
      });
    });

  }

  editarCarteiras(valor: Setor) {

    if(valor.id == this.mesmoId){// || this.mesmoId == 0
      this.abrir = !this.abrir;
    } else {
      this.abrir = true;
    }
    
    // this.abrir = !this.abrir;

    this.setor = valor;
    
    this.mesmoId = valor.id;

    this.definicaoSalaProvaService.getAllByIdSetor(valor.id).toPromise()
      .then(element => this.definicaoSalaProva = element)
      // .then(() => console.log(this.definicaoSalaProva));

  }

  onSubmit() {

    this.definicaoSalaProvaService.updateAll(this.definicaoSalaProva.map((definicaoSalaProva) => {
      return {
        "id": definicaoSalaProva.id,
        "qtdCarteira": definicaoSalaProva.qtdCarteira,
      };
    })).toPromise()
      .then(() => this.definicaoSalaProva = [])
      .then(() => this.abrir = false)
      // .then(() => location.reload())
      // .then(() => this.router.navigate['/definicao-sala-prova/lista']);
  }

}
