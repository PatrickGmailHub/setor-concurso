import { DialogService } from './../../shared/services/dialog.service';
import { LocalDeProva } from '../../shared/local-de-prova';
import { SetorService } from '../../shared/services/setor.service';
import { Setor } from '../../shared/setor';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import * as $ from 'jquery';

@Component({
  selector: 'app-setor-form',
  templateUrl: './setor-form.component.html',
  styleUrls: ['./setor-form.component.css']
})
export class SetorFormComponent implements OnInit {

  isNew: boolean = true;

  setor: Setor;
  locaisDeProva: LocalDeProva[] = [];

  setorAux: any;
  localAux: any;
  locaisAux: any;

  inscricao: Subscription;

  constructor(
    private setorService: SetorService,
    private route: ActivatedRoute,
    private dialogService: DialogService,
    private location: Location

    ) { }

  ngOnInit() {

    $(document).ready(function(){
      $('#cep').mask('00000-000');
    });

    this.setor = new Setor();

    this.inscricao = this.route.params.subscribe(async ({id}) => {
      
      try {

        console.time("setor");

        // const id: number = params['id'];
        
        this.locaisDeProva = await this.setorService.getLocaisDeProva().toPromise();

        if (id) {

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

  cepMask(valor) {
    console.log(valor);
    this.setor.cep = $('#cep').mask('00000-000');
  }

  async onSubmit(form): Promise<void> {

    if(this.isNew) {
      const dados = await this.setorService.salvarSetor(this.setor).toPromise();
      // console.log(dados);
    } else {
      const dados = await this.setorService.atualizarSetor(this.setor).toPromise();
      // $('#btn').modal('show');
      // console.log(dados);
    }
  }

  onDelete() {
    this.dialogService.confirma(`Deseja deletar ${this.setor.nome}`)
      .then((deleta: Boolean) => {

        if(deleta) {
          this.setorService.deletarSetor(this.setor.id).subscribe(dados => console.log(dados));
        }

      });
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }

  getFormGroup(isValid: boolean, isPristine: boolean) {
    return {
      'form-group': true,
      'has-danger': !isValid && !isPristine,
      'has-success': isValid && !isPristine
    }
  }

  getFormControlClass(isValid: boolean, isPristine: boolean) {
    return {
      'form-control': true,
      'form-control-danger': !isValid && !isPristine,
      'form-control-success': isValid && !isPristine
    }
  }

}
