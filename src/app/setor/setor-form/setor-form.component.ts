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
<<<<<<< HEAD
  setor: Setor = new Setor();
  locaisDeProva: LocalDeProva[] = [];
=======
  setor: Setor;
  setorAux: any;
  locaisDeProva: LocalDeProva[];
  localAux: any;
  locaisAux: any;
>>>>>>> 3acd846fd497ff375c284fb009d1eb808587932b
  inscricao: Subscription;

  constructor(
    private setorService: SetorService,
    private route: ActivatedRoute,
    private location: Location

    ) { }

  ngOnInit() {

<<<<<<< HEAD
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
=======
    this.inscricao = this.route.params.subscribe((params: Params) => {
      let id: number = params['id'];

      if(id){
      this.isNew = false;
      this.setorService.getSetor(id).toPromise()
        .then((setor: Setor) => {
          this.setor = setor;
          console.log(this.setor);

        this.setorAux = JSON.stringify(this.setor);
        this.setorAux = JSON.parse(this.setorAux);

          delete this.setorAux.created_at;
          delete this.setorAux.version;
          delete this.setorAux.deleted
          delete this.setorAux.localDeProva.version
          delete this.setorAux.localDeProva.deleted
          delete this.setorAux.localDeProva.created_at
          delete this.setorAux.localDeProva.updated_at
          delete this.setorAux.created_at
          delete this.setorAux.updated_at
        
        this.setor = this.setorAux;

        this.setorService.getLocaisDeProva().subscribe(
          (locaisDeProva: LocalDeProva[]) => {
            this.locaisDeProva = locaisDeProva;

            this.locaisAux = JSON.stringify(this.locaisDeProva);
            this.locaisAux = JSON.parse(this.locaisAux);

            this.locaisAux.forEach(element => delete element.created_at);
            this.locaisAux.forEach(element => delete element.version);
            this.locaisAux.forEach(element => delete element.deleted);
            this.locaisAux.forEach(element => delete element.updated_at);

            this.locaisDeProva = this.locaisAux;

            console.log(JSON.stringify(this.locaisDeProva));

          });

        console.log('###############');
        console.log(this.setor);
        console.log(this.setor.id);
        });
      } else {
        
        this.setor = new Setor();

        this.setorService.getLocaisDeProva().subscribe(
          (locaisDeProva: LocalDeProva[]) => {
            this.locaisDeProva = locaisDeProva;
            console.log(this.locaisDeProva);

            this.locaisAux = JSON.stringify(this.locaisDeProva);
            this.locaisAux = JSON.parse(this.locaisAux);

            this.locaisAux.forEach(element => delete element.created_at);
            this.locaisAux.forEach(element => delete element.version);
            this.locaisAux.forEach(element => delete element.deleted);
            this.locaisAux.forEach(element => delete element.updated_at);

            this.locaisDeProva = this.locaisAux;

            console.log(JSON.stringify(this.locaisDeProva));

        });

>>>>>>> 3acd846fd497ff375c284fb009d1eb808587932b
      }

    });

  }

  async onSubmit(form): Promise<void> {

    if(this.isNew) {
<<<<<<< HEAD
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
=======
      +this.setor.localDeProva.id;
      this.setorService.salvarSetor(this.setor).subscribe(dados => console.log(dados));
      console.log('1 - #####');
      console.log(this.setor);
      console.log('2 - #####');
      console.log(form);
    } else {
      +this.setor.localDeProva.id;
      this.setorService.atualizarSetor(this.setor).subscribe(dados => console.log(dados));
      console.log('1 - #####');
      console.log(this.setor);
      console.log('2 - #####');
      console.log(form);
>>>>>>> 3acd846fd497ff375c284fb009d1eb808587932b
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
