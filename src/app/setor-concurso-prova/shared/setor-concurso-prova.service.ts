import { SetorService } from './../../setor/shared/setor.service';
import { LocalDeProva } from '../../setor/shared/local-de-prova';
import { Setor } from '../../setor/shared/setor';
import { HttpClient, HttpHeaders, HttpHeaderResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SetorConcursoProvaService {

  constructor(
    private setorService: SetorService,
    private http: HttpClient
  ) { }

  getAll() {
<<<<<<< HEAD

    return this.setorService.getLocaisDeProva().toPromise()
      .then(async locaisDeProva => {
        // TODO

        

    }).catch(

    );

    /* this.setorService.getLocaisDeProva().toPromise()
    .then(
      this.setorService.getSetores();
    ); */
    
  }

=======
    return this.setorService.getSetores();
  }

>>>>>>> bd794d415a874a4bb4c80d6b0628bfed3b68ce1c
  getById(id: number) {
    return null;
  }

  update() {

  }

  delete() {
    
  }

}
