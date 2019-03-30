import { SetorService } from './../shared/setor.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Setor } from '../shared/setor'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-setor-detalhe',
  templateUrl: './setor-detalhe.component.html',
  styleUrls: ['./setor-detalhe.component.css']
})
export class SetorDetalheComponent implements OnInit {

  setores: Setor[];
  setor: Setor;
  inscricao: Subscription;


  constructor(
    private setorService: SetorService,
    private route: ActivatedRoute,
    //private location: Location
  ) { }

  ngOnInit() {

    //busca todos
    //this.setorService.getSetores().subscribe((setores: Setor[]) => {this.setores = setores}), () => 'Falha';

    //busca pelo id
    this.inscricao = this.route.params.subscribe((params: Params) => {
      let id: number = params['id'];
      this.setorService.getSetor(id).toPromise()
        .then((setor: Setor) => {
          //console.log(setor);
          this.setor = setor;
        });
    });

  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }

}
