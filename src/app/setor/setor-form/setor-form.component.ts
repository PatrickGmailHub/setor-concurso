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
  setor: Setor;
  setores: Setor[];
  inscricao: Subscription;

  constructor(
    private setorService: SetorService,
    private route: ActivatedRoute,
    private location: Location
    ) { }

  ngOnInit() {
    
    this.inscricao = this.route.params.subscribe((params: Params) => {
      let id: number = params['id'];
      this.setorService.getSetor(id).toPromise()
        .then((setor: Setor) => {
          //console.log(setor);
          this.setor = setor;
        });
    });

  }

  onSubmit(): void {
    if(this.isNew) {

    } else {

    }
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }

}
