import { ActivatedRoute } from '@angular/router';
import { SetorConcursoProvaService } from './shared/setor-concurso-prova.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Setor } from './../setor/shared/setor';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-setor-concurso-prova',
  templateUrl: './setor-concurso-prova.component.html',
  styleUrls: ['./setor-concurso-prova.component.css']
})
export class SetorConcursoProvaComponent implements OnInit {


  isNew: boolean = true;

  setor: Setor;
  setores: Setor[] = [];

  inscricao: Subscription;

  constructor(
    private setorConcursoProvaService: SetorConcursoProvaService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.inscricao = this.route.params.subscribe(async ({id}) => {
      
      try {

        console.time("setor");

        // const id: number = params['id'];
        
        //this.setores = await this.setorConcursoProvaService.getAll().toPromise(); -------TODO ATUAL

        if (id) {

          this.isNew = false;
          
          this.setor = await this.setorConcursoProvaService.getById(id).toPromise();

          /* this.setor.localDeProva = this.locaisDeProva.find((localDeProva) => localDeProva.id == this.setor.localDeProva.id); */
          
          // TODO: Forma com destruct do Javascript. Doc: https://basarat.gitbooks.io/typescript/docs/destructuring.html 
          // const {id: localDeProvaId} = this.setor.localDeProva;
          // this.setor.localDeProva = this.locaisDeProva.find(({id}) => id == localDeProvaId) as LocalDeProva;
          
        }

      } catch (error) {
        console.log(error);
      } finally {
        console.timeEnd("setor");
      }

    });

  }

}
