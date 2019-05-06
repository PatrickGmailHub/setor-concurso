import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetorConcursoProvaOrgComponent } from './setor-concurso-prova-org.component';

describe('SetorConcursoProvaOrgComponent', () => {
  let component: SetorConcursoProvaOrgComponent;
  let fixture: ComponentFixture<SetorConcursoProvaOrgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetorConcursoProvaOrgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetorConcursoProvaOrgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
