import { DistribuicaoSalaProvaService } from './../shared/services/distribuicao-sala-prova.service';
import { DistribuicaoSalaProva } from './../shared/distribuicao-sala-prova';
import { InscricaoService } from './../shared/services/inscricao.service';
import { DefinicaoSalaProvaService } from './../shared/services/definicao-sala-prova.service';
import { SetorService } from 'src/app/shared/services/setor.service';
import { Concurso } from 'src/app/shared/concurso';
import { SetorConcursoProva } from './../shared/setor-concurso-prova';
import { LocalDeProva } from './../shared/local-de-prova';
import { DefinicaoSalaProva } from './../shared/definicao-sala-prova';
import { Component, OnInit } from '@angular/core';
import { EtapaProva } from './../shared/etapa-prova';
import { Setor } from '../shared/setor';
import { LocalDeProvaService } from '../shared/services/local-de-prova.service';
import { SetorConcursoProvaService } from '../shared/services/setor-concurso-prova.service';
import { Inscricao } from '../shared/inscricao';
import { element } from '@angular/core/src/render3';
import { Router } from '@angular/router';

@Component({
  selector: 'app-distribuicao-sala-prova',
  templateUrl: './distribuicao-sala-prova.component.html',
  styleUrls: ['./distribuicao-sala-prova.component.css']
})
export class DistribuicaoSalaProvaComponent implements OnInit {

  distribuicaoSalaProvas: DistribuicaoSalaProva[] = [];
  distribuicaoSalaProva: DistribuicaoSalaProva;

  setores: Setor[] = [];
  setor: Setor;
  setoresAux: Setor[] = [];
  setoresId: number[] = [];

  definicaoSalaProvas: DefinicaoSalaProva[] = [];

  etapaProvas: EtapaProva[] = [];
  etapa: EtapaProva;

  concursos: Concurso[] = [];
  concurso: Concurso;
  concursoAtivo: Concurso;

  locaisDeProva: LocalDeProva[] = [];

  setorConcursoProva: SetorConcursoProva;

  inscrito: Inscricao;
  inscritos: Inscricao[];
  inscritosPg: Inscricao[] = [];
  inscritosIst: Inscricao[] = [];

  page: number = 1;
  pageSize: number = 5;
  collectionSize: number;

  constructor(
    private distribuicaoSalaProvaService: DistribuicaoSalaProvaService,
    private inscricaoService: InscricaoService,
    private setorService: SetorService,
    private localDeProvaService: LocalDeProvaService,
    private definicaoSalaProvaService: DefinicaoSalaProvaService,
    private setorConcursoProvaService: SetorConcursoProvaService,
    private router: Router,
  ) { }

  ngOnInit() {

    this.setor = new Setor();

    this.setorConcursoProva = new SetorConcursoProva();
    
    this.buscarLocalidade;

    this.buscarSetor;
    
  }

  // Traz todos os setores
  get buscarSetor() {

    /* this.setorConcursoProvaService.getAll().subscribe(setorConcursoProvas => {
      setorConcursoProvas.forEach(setorConcursoProva => {
        this.setores.push(setorConcursoProva.setor)
      });
      this.collectionSize = this.setores.length;

      this.setoresPag;

    }); */

    // this.setorConcursoProvaService.getAll().subscribe(setorConcursoProvas => {
    this.setorConcursoProvaService.getAll().toPromise()
    .then(setorConcursoProvas => {
      setorConcursoProvas.forEach(setorConcursoProva => {
        this.setores.push(setorConcursoProva.setor);
      });
    })
    .then(() => {
      this.inscricaoService.getAllSetoresNaoDistribuidos().toPromise()
      .then((setoresIds) => {
        this.setoresId = setoresIds;
      })
      .then(() => {
        let index = 0
        this.setoresId.forEach(el => {
          this.setores.forEach(e => {
            if(e.id == el ){
              this.setores.splice(index,1);
            }
            index++;
          })
          index = 0;
        })
      })
      
      this.collectionSize = this.setores.length;

      this.setoresPag;
      
    });

    return null;

    }

  // Traz setores por localidade.
  selectSetor(valor) {
    
    this.setores = new Array();
    this.setoresAux = new Array();

    if(valor) {
      // this.setorConcursoProvaService.getAllByLocalProva(valor['id']).subscribe(element => {
      this.setorConcursoProvaService.getAllByLocalProva(valor['id']).toPromise()
      .then(element => {
        element.forEach(element => {
          this.setores.push(element.setor);
        })
        // this.collectionSize = this.setores.length;
        // this.setoresPag;
      })
      .then(() => {
        this.inscricaoService.getAllSetoresNaoDistribuidosPorLocal(valor['id']).toPromise()
        .then((setoresIds) => {
          this.setoresId = setoresIds;
        })
        .then(() => {
          let index = 0
          this.setoresId.forEach(el => {
            this.setores.forEach(e => {
              if(e.id == el ){
                this.setores.splice(index,1);
              }
              index++;
            });
            index = 0;
          });
        });
      
      this.collectionSize = this.setores.length;

      this.setoresPag;

      });
    } else {
      this.buscarSetor;
    }
    
  } 

  get setoresPag() {
    return this.setores
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  get buscarLocalidade() {
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

      return null;
  }

  distCandidatos(setor: Setor) {
    this.distribuicaoSalaProva = new DistribuicaoSalaProva();
    var qtdCart: number = 0;
    this.definicaoSalaProvaService.getAllByIdSetor(setor.id).toPromise()
      .then(definicaoSalaProva => this.definicaoSalaProvas = definicaoSalaProva)
      .then(() => {
        this.definicaoSalaProvas.forEach(e => {
          qtdCart += e.qtdCarteira;
        });
      })
      .then(() => {
        let aux: any ={}
        // console.log(`${qtdCart} Vagas do setor: ${setor.nome} com Id: ${setor.id}`);
        this.inscricaoService.getAllInscritosValidosSemSalasSetorPorLocalPorQtd(setor.id, qtdCart).toPromise()
        .then((inscricoes) => this.inscritos = inscricoes)
        // .then(() => console.log(`${qtdCart} Vagas do setor: ${setor.nome} com Id: ${setor.id}`))
        // .then(() => console.log(this.inscritos))
        .then(() => {
          //TODO
          // console.log(this.inscritos)
          let cont: number = 0;
          this.definicaoSalaProvas.forEach(dsp => {
            for(let i=0; i < dsp.qtdCarteira; i++) {
              // Montando Objeto distribuicaoSalaProva
              aux = {
                "definicaoSalaProva": {
                  "id": dsp.id
                },
                "inscricao": {
                  "id": this.inscritos[cont]['id_inscricao']
                }
              }

              /* this.distribuicaoSalaProva.definicaoSalaProva.id = dsp.id;
              this.distribuicaoSalaProva.inscricao.id = this.inscritos[cont]['id_inscricao']; */
  
              // Adcionando no Array distribuicaoSalaProvas
              this.distribuicaoSalaProvas.push(aux);
              cont++;
            }
          });
          // console.log(this.distribuicaoSalaProvas);
          this.distribuicaoSalaProvaService.create(this.distribuicaoSalaProvas).toPromise()
            .then(() => location.reload())
            // .then(() => this.router.navigate['/setor-concurso/lista'])
        });

      });
      
      // .then(()=>console.log(`${qtdCart} Vagas do setor: ${setor.nome} com Id: ${setor.id}`))
      
  }

  onSubmit(f) {
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
  }

}
