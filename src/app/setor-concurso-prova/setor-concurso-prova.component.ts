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
import * as $ from './../../../node_modules/jquery/';

declare var $: any;

@Component({
  selector: 'app-setor-concurso-prova',
  templateUrl: './setor-concurso-prova.component.html',
  styleUrls: ['./setor-concurso-prova.component.css']
})
export class SetorConcursoProvaComponent implements OnInit {

  setorConcursoProva: SetorConcursoProva;

  distribuidos: boolean = true;

  locaisDeProva: LocalDeProva[] = [];

  setor: Setor;
  setores: Setor[] = [];
  setoresAux: Setor[] = [];

  concursos: Concurso[] = [];
  concursoAtivo: Concurso;

  etapaProvas: EtapaProva[] = [];
  etapa: EtapaProva;
  
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

  extrairSetorDistribuido (item, index) {
    //TODO
    this.setoresAux.forEach(element => {
      if(this.setores[index].id == element.id) {
        this.setores.splice(index,1)
      }
    })
  }

  selectSetor(valor) {

    this.setores = new Array();
    this.setoresAux = new Array();

    if(this.distribuidos) {
      this.setorConcursoProvaService.getAllByLocalProva(valor['id']).subscribe(element => {
        element.forEach(element => {
          this.setores.push(element.setor)
        });
      });
    } else {
      this.setorConcursoProvaService.getAllByLocalProva(valor['id']).toPromise()
        .then(element => {
          element.forEach(element => {
            this.setoresAux.push(element.setor);
          });
        })
        .then(() => {
          this.setorService.getAllByLocalProva(valor['id']).toPromise()
            .then(element => {
              this.setores = element;
            })
            .then(() => {
              this.setoresAux.forEach(element => {
                let index = 0;
                this.setores.forEach(el => {
                  if(el.id == element.id) {
                    this.setores.splice(index,1);
                  }
                  index++;
                });
              });
            });
        });
    }

    /* this.setorService.getSetores().subscribe(setores => {
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

        //Implementar lógica do checkBox checked...
        if (this.distribuidos) {
          console.log(this.buscaDist(valor['id']))
        }

    }); */

  }

  preencherForm(localSel: Setor) {
    this.localTemp = localSel;

    this.setorConcursoProva.setor = localSel;

    this.concursoService.getAll().toPromise()
      .then(result => this.concursos = result.filter(result => result.tipoConcurso.id == 2))
      .then(result => this.setorConcursoProva.concurso = result[0])

    this.etapaProvaService.getAll().toPromise()
      .then((result) => this.etapaProvas = result);

  }

  buscaDist(valor: any) {

    valor = JSON.stringify(valor);
    let valorString: string = valor;

    valor = valorString.substr(1, valorString.indexOf(':')-1)

    var valorEnviar = {
      "id": valor
    }

    this.selectSetor(valorEnviar);

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
      .then(() => {
        console.log(dados)
        $('#exampleModal').modal('hide');
      });

    this.router.navigate['/setor-concurso/lista'];
    
  }

}
