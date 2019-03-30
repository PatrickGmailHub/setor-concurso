import { SetorService } from './shared/setor.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Setor } from './shared/setor';

@Component({
  selector: 'app-setor',
  templateUrl: './setor.component.html',
  styleUrls: ['./setor.component.css']
})
export class SetorComponent implements OnInit {

  setores: Setor[];

  constructor(
    private setorService: SetorService
  ) { }

  ngOnInit() {

    this.setorService.getSetores().subscribe((setores: Setor[]) => {this.setores = setores}), () => 'Falha';

  }

}
