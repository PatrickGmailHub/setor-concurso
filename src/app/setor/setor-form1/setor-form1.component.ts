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

  locaisDeProva: LocalDeProva[] = [];
  localDeProva: LocalDeProva;
  locaisAux: any;
  localAux: any;
  //setores: Setor[];
  inscricao: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private setorService: SetorService,
    private route: ActivatedRoute,
    // private location: Location
  ) { }

  ngOnInit() {

    this.setor = new Setor();

    this.inscricao = this.route.params.subscribe((params: Params) => {
      let id: number = params['id'];

      if(id){
      this.isNew = false;
      this.setorService.getSetor(id).toPromise()
        .then((setor: Setor) => {
          this.setor = setor;
          console.log(this.setor);

        this.setorService.getLocaisDeProva().subscribe(
          (locaisDeProva: LocalDeProva[]) => {
            this.locaisDeProva = locaisDeProva;

          });

        this.criarSetorForm(this.setor);

        // this.setor.localDeProva = this.setor.localDeProva;
        console.log(this.setor.localDeProva.nome)

        this.setor.localDeProva = this.locaisDeProva.find((localDeProva) => {
          return localDeProva.id == this.setor.localDeProva.id
        });
        
        console.log(this.setor.localDeProva.id)

        // this.location.href['/'];

        console.log('###############');
        console.log(this.setor);
        console.log(this.setor.id);
        });
      } else {

        this.setorService.getLocaisDeProva().subscribe(
          (locaisDeProva: LocalDeProva[]) => {
            this.locaisDeProva = locaisDeProva;
            console.log(this.locaisDeProva);

        });

        this.criarSetorForm(this.setor);

        this.setor.localDeProva

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

}
