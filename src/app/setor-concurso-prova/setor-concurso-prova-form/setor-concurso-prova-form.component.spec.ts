import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetorConcursoProvaFormComponent } from './setor-concurso-prova-form.component';

describe('SetorConcursoProvaFormComponent', () => {
  let component: SetorConcursoProvaFormComponent;
  let fixture: ComponentFixture<SetorConcursoProvaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetorConcursoProvaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetorConcursoProvaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
