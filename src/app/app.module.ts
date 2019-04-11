import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SetorModule } from './setor/setor.module';
import { RodapeComponent } from './rodape/rodape.component';
import { ReactiveFormsModule } from '@angular/forms';
<<<<<<< HEAD
import { SetorConcursoProvaModule } from './setor-concurso-prova/setor-concurso-prova.module';
=======
>>>>>>> 3acd846fd497ff375c284fb009d1eb808587932b

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    RodapeComponent,
  ],
  imports: [
    BrowserModule,
    SetorModule,
<<<<<<< HEAD
    SetorConcursoProvaModule,
=======
>>>>>>> 3acd846fd497ff375c284fb009d1eb808587932b
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
