import { SetorConcursoProvaService } from './setor-concurso-prova/shared/setor-concurso-prova.service';
import { ConcursoService } from './shared/services/concurso.service';
import { LocalDeProvaService } from './shared/services/local-de-prova.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SetorModule } from './setor/setor.module';
import { RodapeComponent } from './rodape/rodape.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SetorConcursoProvaModule } from './setor-concurso-prova/setor-concurso-prova.module';
import { SetorService } from './shared/services/setor.service';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    RodapeComponent,
  ],
  imports: [
    BrowserModule,
    SetorModule,
    SetorConcursoProvaModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    SetorService,
    LocalDeProvaService,
    ConcursoService,
    SetorConcursoProvaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
