import { ActivatedRoute } from '@angular/router';
import { DialogService } from './../shared/services/dialog.service';
import { LocalDeProva } from '../shared/local-de-prova';
import { SetorService } from '../shared/services/setor.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Setor } from '../shared/setor';

@Component({
  selector: 'app-setor',
  templateUrl: './setor.component.html',
  styleUrls: ['./setor.component.css']
})
export class SetorComponent implements OnInit {

  setores: Setor[];
  setor: Setor;

  constructor(
    private setorService: SetorService,
    private dialogService: DialogService,
    private route: ActivatedRoute
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

      });
      
  }

  teste() {
    console.log(JSON.stringify(this.setores));
  }

  async onDelete(id): Promise<void> {

    let jsonId = `{"id": ${id}}`;

    console.log(jsonId);
    console.log(JSON.parse(jsonId));

    this.setor = new Setor();

    this.setor = await this.setorService.getSetor(id).toPromise();

    // this.setor = JSON.parse(jsonId);

    // console.log(this.setor);
    // JSON.parse(jsonId);

    delete this.setor['version'];
    delete this.setor['created_at'];
    delete this.setor['updated_at'];
    delete this.setor['deleted'];
    delete this.setor.localDeProva['version'];
    delete this.setor.localDeProva['created_at'];
    delete this.setor.localDeProva['updated_at'];
    delete this.setor.localDeProva['deleted'];

    // console.log(JSON.parse(jsonId));
    // console.log(jsonId);
    console.log(this.setor);

    this.dialogService.confirma(`Deseja deletar "${this.setor.nome}"`)
      .then((deleta: Boolean) => {

        let teste: any = {}

        if(deleta) {

          teste = {
            "id": this.setor.id
          }

          // teste = JSON.parse(teste)

          console.log(teste);
          
          // this.setorService.deletarSetor(JSON.parse(jsonId)).toPromise()
          this.setorService.deletarSetor(teste).toPromise()
            .then((dados) => console.log(dados))
        }
      });

  }

}
