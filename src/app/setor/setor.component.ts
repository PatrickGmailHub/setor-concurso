import { ActivatedRoute, Router } from '@angular/router';
import { DialogService } from './../shared/services/dialog.service';
import { LocalDeProva } from '../shared/local-de-prova';
import { SetorService } from '../shared/services/setor.service';
import { Component, OnInit } from '@angular/core';
import { Setor } from '../shared/setor';

@Component({
  selector: 'app-setor',
  templateUrl: './setor.component.html',
  styleUrls: ['./setor.component.css']
})
export class SetorComponent implements OnInit {

  setores: Setor[] = [];
  setor: Setor;

  page: number = 1;
  pageSize: number = 5;
  collectionSize: number;

  constructor(
    private setorService: SetorService,
    private dialogService: DialogService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {

    this.setorService.getSetores().toPromise()
      .then((setores: Setor[]) => {
        this.setores = setores;

        this.setores.forEach(element => {

          delete element['version'];
          delete element['created_at'];
          delete element['updated_at'];
          delete element['deleted'];
          delete element.localDeProva['version'];
          delete element.localDeProva['created_at'];
          delete element.localDeProva['updated_at'];
          delete element.localDeProva['deleted'];

        });

        this.collectionSize = this.setores.length;
        
      }).then(() => this.setoresPag);

  }

  teste() {
    console.log(JSON.stringify(this.setores));
  }

  async onDelete(id): Promise<void> {

    this.setor = await this.setorService.getSetor(id).toPromise();

    this.dialogService.confirma(`Deseja deletar "${this.setor.nome}"`)
      .then((deleta: Boolean) => {

        if(deleta) {

          this.setorService.deletarSetor(this.setor.id).toPromise()
            .then(() => {
              this.router.navigate['/distribuicao-sala-prova/lista']
              location.reload()
            })
            
        }
      });
      // this.router.navigate['/distribuicao-sala-prova/lista'];
  }

  get setoresPag() {
    return this.setores
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

}
