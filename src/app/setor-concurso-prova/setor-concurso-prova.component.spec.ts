import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetorConcursoProvaComponent } from './setor-concurso-prova.component';

describe('SetorConcursoProvaComponent', () => {
  let component: SetorConcursoProvaComponent;
  let fixture: ComponentFixture<SetorConcursoProvaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetorConcursoProvaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetorConcursoProvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
