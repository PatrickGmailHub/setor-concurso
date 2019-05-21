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
import { element } from '@angular/core/src/render3';

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
  concurso: Concurso;
  concursoAtivo: Concurso;

  etapaProvas: EtapaProva[] = [];
  etapa: EtapaProva;
  
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
          element.forEach(el => {
            this.setoresAux.push(el.setor);
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

  }

  preencherForm(localSel: Setor) {

    this.setorConcursoProva = new SetorConcursoProva();

    this.concursoService.getAll().toPromise()
      .then(result => this.concursos = result.filter(result => result.tipoConcurso.id == 2))
      .then(result => this.concurso = result[0])
      
      .then(() => {
        this.etapaProvaService.getAll().toPromise()
        .then((result) => this.etapaProvas = result)
        .then(() => {
          if(this.distribuidos) {
            this.setorConcursoProvaService.getAllByLocalProva(localSel.localDeProva.id).forEach(element => {
              this.setorConcursoProva = element.find(el => el.setor.id == localSel.id);
              //Processo abaixo sempre precisa ser feito para preencher os objetos internos...
              this.setorConcursoProva.concurso = this.concursos.find((concurso) => concurso.id === this.setorConcursoProva.concurso.id);
              this.setorConcursoProva.etapaProva = this.etapaProvas.find((etapaProva) => etapaProva.id === this.setorConcursoProva.etapaProva.id);
              console.log(this.setorConcursoProva);
            });
          } 
        });
      });
      
      
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

    if(this.distribuidos) {
      //TODO
      console.log('Atualizar')

      let teste: any = {};

      teste = {
        "id": this.setorConcursoProva.id,
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

      const dados = await this.setorConcursoProvaService.update(teste).toPromise()
        .then(() => {
          console.log(dados)
          $('#exampleModal').modal('hide');
        });
  
      this.router.navigate['/setor-concurso/lista'];

    } else {
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

}
