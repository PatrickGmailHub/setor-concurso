import { DistribuicaoSalaProvaService } from './shared/services/distribuicao-sala-prova.service';
import { InscricaoService } from './shared/services/inscricao.service';
import { DistribuicaoSalaProvaModule } from './distribuicao-sala-prova/distribuicao-sala-prova.module';
import { DefinicaoSalaProvaModule } from './definicao-sala-prova/definicao-sala-prova.module';
import { SetorConcursoProvaService } from './shared/services/setor-concurso-prova.service';
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
import { DialogService } from './shared/services/dialog.service';
import { TextMaskModule } from 'angular2-text-mask';

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
    DefinicaoSalaProvaModule,
    DistribuicaoSalaProvaModule,
    ReactiveFormsModule,
    AppRoutingModule,
    TextMaskModule
  ],
  providers: [
    SetorService,
    LocalDeProvaService,
    ConcursoService,
    SetorConcursoProvaService,
    InscricaoService,
    DistribuicaoSalaProvaService,
    DialogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
