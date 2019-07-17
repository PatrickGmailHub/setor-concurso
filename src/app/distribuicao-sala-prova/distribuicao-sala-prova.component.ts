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

@Component({
  selector: 'app-distribuicao-sala-prova',
  templateUrl: './distribuicao-sala-prova.component.html',
  styleUrls: ['./distribuicao-sala-prova.component.css']
})
export class DistribuicaoSalaProvaComponent implements OnInit {

  setores: Setor[] = [];
  setor: Setor;
  setoresAux: Setor[] = [];

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
    private inscricaoService: InscricaoService,
    private setorService: SetorService,
    private localDeProvaService: LocalDeProvaService,
    private definicaoSalaProvaService: DefinicaoSalaProvaService,
    private setorConcursoProvaService: SetorConcursoProvaService,
  ) { }

  ngOnInit() {

    this.setor = new Setor();

    this.setorConcursoProva = new SetorConcursoProva();
    
    this.buscarLocalidade;

    this.buscarSetor;
    
  }

  // Traz setores por localidade.
  selectSetor(valor) {
    
    this.setores = new Array();
    this.setoresAux = new Array();

    if(valor) {
      this.setorConcursoProvaService.getAllByLocalProva(valor['id']).subscribe(element => {
        element.forEach(element => {
          this.setores.push(element.setor)
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

  get buscarSetor() {

    this.setorConcursoProvaService.getAll().subscribe(setorConcursoProvas => {
      setorConcursoProvas.forEach(setorConcursoProva => {
        this.setores.push(setorConcursoProva.setor)
      });

      this.collectionSize = this.setores.length;

      this.setoresPag;

    });

    return null;
    
  }

  distCandidatos(setor: Setor) {
    var qtdCart: number = 0;
    this.definicaoSalaProvaService.getAllByIdSetor(setor.id).toPromise()
      .then(definicaoSalaProva => this.definicaoSalaProvas = definicaoSalaProva)
      .then(() => {
        this.definicaoSalaProvas.forEach(e => {
          qtdCart += e.qtdCarteira;
        })
      })
      .then(() => {
        console.log(`${qtdCart} Vagas do setor: ${setor.nome} com Id: ${setor.id}`);
        this.inscricaoService.getAllInscritosValidosSemSalasSetorPorLocalPorQtd(setor.id, qtdCart).toPromise()
        .then((inscricoes) => this.inscritos = inscricoes)
        .then(() => console.log(`${qtdCart} Vagas do setor: ${setor.nome} com Id: ${setor.id}`))
        .then(() => console.log(this.inscritos))
      })
      .then(()=>console.log(`${qtdCart} Vagas do setor: ${setor.nome} com Id: ${setor.id}`))

      
  }

}
