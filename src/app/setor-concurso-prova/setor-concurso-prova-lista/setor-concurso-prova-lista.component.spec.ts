import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetorConcursoProvaListaComponent } from './setor-concurso-prova-lista.component';

describe('SetorConcursoProvaListaComponent', () => {
  let component: SetorConcursoProvaListaComponent;
  let fixture: ComponentFixture<SetorConcursoProvaListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetorConcursoProvaListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetorConcursoProvaListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
