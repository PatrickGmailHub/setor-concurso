import { LocalDeProva } from './../shared/local-de-prova';
import { SetorService } from './../shared/setor.service';
import { Setor } from './../shared/setor';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-setor-form',
  templateUrl: './setor-form.component.html',
  styleUrls: ['./setor-form.component.css']
})
export class SetorFormComponent implements OnInit {

  isNew: boolean = true;
  setor: Setor = new Setor();
  locaisDeProva: LocalDeProva[] = [];
  inscricao: Subscription;

  constructor(
    private setorService: SetorService,
    private route: ActivatedRoute,
    private location: Location
    ) { }

  ngOnInit() {

    this.inscricao = this.route.params.subscribe(async ({id}) => {
      
      try {

        console.time("setor");

        // const id: number = params['id'];
        
        this.locaisDeProva = await this.setorService.getLocaisDeProva().toPromise();

        if (id){

          this.isNew = false;
          this.setor = await this.setorService.getSetor(id).toPromise();
          this.setor.localDeProva = this.locaisDeProva.find((localDeProva) => localDeProva.id == this.setor.localDeProva.id);
          
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

  async onSubmit(form): Promise<void> {

    if(this.isNew) {
      const dados = await this.setorService.salvarSetor(this.setor).toPromise();
      console.log(dados);
      /* console.log('1 - #####');
      console.log('2 - #####');
      console.log(form); */
    } else {
      const dados = await this.setorService.atualizarSetor(this.setor).toPromise();
      console.log(dados);
      /* console.log('1 - #####');
      console.log('2 - #####');
      console.log(form); */
    }
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }

  getFormGroup(isValid: boolean, isPristine: boolean) {
    return {
      'form-group': true,
      'has-danger': !isValid && !isPristine,
      'has-success': isValid && !isPristine
    };
  }

  getFormControlClass(isValid: boolean, isPristine: boolean) {
    return {
      'form-control': true,
      'form-control-danger': !isValid && !isPristine,
      'form-control-success': isValid && !isPristine
    };
  }

}
