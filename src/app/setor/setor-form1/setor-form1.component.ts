import { LocalDeProva } from './../shared/local-de-prova';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { SetorService } from '../shared/setor.service';
import { Setor } from '../shared/setor';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-setor-form1',
  templateUrl: './setor-form1.component.html',
  styleUrls: ['./setor-form1.component.css']
})
export class SetorForm1Component implements OnInit {

  formulario: FormGroup;

  isNew: boolean = true;
  setor: Setor;
  setorAux: any;
  dados: any;

<<<<<<< HEAD
  locaisDeProva: LocalDeProva[] = [];
=======
  locaisDeProva: LocalDeProva[];
>>>>>>> 3acd846fd497ff375c284fb009d1eb808587932b
  localDeProva: LocalDeProva;
  locaisAux: any;
  localAux: any;
  //setores: Setor[];
  inscricao: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private setorService: SetorService,
    private route: ActivatedRoute,
<<<<<<< HEAD
    // private location: Location
=======
    //private location: Location
>>>>>>> 3acd846fd497ff375c284fb009d1eb808587932b
  ) { }

  ngOnInit() {

<<<<<<< HEAD
    this.setor = new Setor();

=======
>>>>>>> 3acd846fd497ff375c284fb009d1eb808587932b
    this.inscricao = this.route.params.subscribe((params: Params) => {
      let id: number = params['id'];

      if(id){
      this.isNew = false;
      this.setorService.getSetor(id).toPromise()
        .then((setor: Setor) => {
          this.setor = setor;
          console.log(this.setor);

<<<<<<< HEAD
=======
        this.setorAux = JSON.stringify(this.setor);
        this.setorAux = JSON.parse(this.setorAux);

          delete this.setorAux.version;
          delete this.setorAux.deleted
          delete this.setorAux.localDeProva.version
          delete this.setorAux.localDeProva.deleted
          delete this.setorAux.localDeProva.created_at
          delete this.setorAux.localDeProva.updated_at
          delete this.setorAux.created_at
          delete this.setorAux.updated_at
        
        this.setor = this.setorAux;
        this.setor.id = +id;

>>>>>>> 3acd846fd497ff375c284fb009d1eb808587932b
        this.setorService.getLocaisDeProva().subscribe(
          (locaisDeProva: LocalDeProva[]) => {
            this.locaisDeProva = locaisDeProva;

<<<<<<< HEAD
          });

        this.criarSetorForm(this.setor);

        // this.setor.localDeProva = this.setor.localDeProva;
        console.log(this.setor.localDeProva.nome)

        this.setor.localDeProva = this.locaisDeProva.find((localDeProva) => {
          return localDeProva.id == this.setor.localDeProva.id
        });
        
        console.log(this.setor.localDeProva.id)

        // this.location.href['/'];
=======
            this.locaisAux = JSON.stringify(this.locaisDeProva);
            this.locaisAux = JSON.parse(this.locaisAux);

            this.locaisAux.forEach(element => delete element.created_at);
            this.locaisAux.forEach(element => delete element.version);
            this.locaisAux.forEach(element => delete element.deleted);
            this.locaisAux.forEach(element => delete element.updated_at);

            this.locaisDeProva = this.locaisAux;

          });

          

        //this.setor.localDeProva.id
        this.criarSetorForm(this.setor);

        /* this.localDeProva = this.setor.localDeProva;
        this.setor.localDeProva = this.localDeProva; */
>>>>>>> 3acd846fd497ff375c284fb009d1eb808587932b

        console.log('###############');
        console.log(this.setor);
        console.log(this.setor.id);
        });
      } else {
<<<<<<< HEAD
=======
        
        this.setor = new Setor();
>>>>>>> 3acd846fd497ff375c284fb009d1eb808587932b

        this.setorService.getLocaisDeProva().subscribe(
          (locaisDeProva: LocalDeProva[]) => {
            this.locaisDeProva = locaisDeProva;
            console.log(this.locaisDeProva);

<<<<<<< HEAD
        });

        this.criarSetorForm(this.setor);

        this.setor.localDeProva

=======
            this.locaisAux = JSON.stringify(this.locaisDeProva);
            this.locaisAux = JSON.parse(this.locaisAux);

            this.locaisAux.forEach(element => delete element.created_at);
            this.locaisAux.forEach(element => delete element.version);
            this.locaisAux.forEach(element => delete element.deleted);
            this.locaisAux.forEach(element => delete element.updated_at);

            this.locaisDeProva = this.locaisAux;

            console.log(JSON.stringify(this.locaisDeProva));

        });
        

        this.criarSetorForm(this.setor);

>>>>>>> 3acd846fd497ff375c284fb009d1eb808587932b
        console.log('###############');
        console.log(this.setor);
        console.log(this.setor.id);

      }

    });

    /* 
      this.formulario = new FormGroup({
        id: new FormControl(null),
        nome: new FormControl(null),
      })
    */

  }

<<<<<<< HEAD
  criarSetorForm(setor: Setor) {

    this.formulario = this.formBuilder.group({
      id: [this.setor.id],
      nome: [this.setor.nome],
      endereco: [this.setor.endereco],
      bairro: [this.setor.bairro],
      // localDeProva: [this.setor.localDeProva],
      localDeProva: this.formBuilder.group({
        id: [this.setor.localDeProva.id],
        nome: [this.setor.localDeProva.nome]
      }),
      cep: [this.setor.cep],
      qtd_sala: [this.setor.qtd_sala],
      nome_responsavel: [this.setor.nome_responsavel],
      celular_responsavel: [this.setor.celular_responsavel],
      email_responsavel: [this.setor.email_responsavel],
      latitude: [this.setor.latitude],
      longitude: [this.setor.longitude],
      locaisDeProva: [this.locaisDeProva]

    });
  }

  compararLocal(obj1: LocalDeProva, obj2: LocalDeProva) {
    return (obj1 && obj2) ? (obj1.nome === obj2.nome) : (obj1 === obj2)
  }

=======
>>>>>>> 3acd846fd497ff375c284fb009d1eb808587932b
  onSubmit(){
    if(this.isNew) {
      console.log(JSON.stringify(this.formulario.value));
      console.log('###################################')
      console.log(this.formulario.value);
      delete this.setor.localDeProva.nome;
      +this.setor.localDeProva.id;
      this.setorService.salvarSetor(this.setor).subscribe(dados => console.log(dados));
      //this.criarSetorForm.reset(new Setor());
    } else {
      console.log(JSON.stringify(this.formulario.value));
      console.log('###################################')
      console.log(this.formulario.value);
      delete this.setor.localDeProva.nome;
      +this.setor.localDeProva.id;
      this.setorService.atualizarSetor(this.setor).subscribe(dados => console.log(dados));
    }
  }

<<<<<<< HEAD
=======
  criarSetorForm(setor: Setor) {
    this.formulario = this.formBuilder.group({
      id: [this.setor.id],
      nome: [this.setor.nome],
      endereco: [this.setor.endereco],
      bairro: [this.setor.bairro],
      localDeProva: [this.setor.localDeProva],
      /* localDeProva: this.formBuilder.group({
        id: [this.setor.localDeProva.id],
        nome: [this.setor.localDeProva.nome]
      }), */
      cep: [this.setor.cep],
      qtd_sala: [this.setor.qtd_sala],
      nome_responsavel: [this.setor.nome_responsavel],
      celular_responsavel: [this.setor.celular_responsavel],
      email_responsavel: [this.setor.email_responsavel],
      latitude: [this.setor.latitude],
      longitude: [this.setor.longitude],
      locaisDeProva: [this.locaisDeProva]
    });
  }

>>>>>>> 3acd846fd497ff375c284fb009d1eb808587932b
}
