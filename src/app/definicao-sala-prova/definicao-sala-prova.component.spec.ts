import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefinicaoSalaProvaComponent } from './definicao-sala-prova.component';

describe('DefinicaoSalaProvaComponent', () => {
  let component: DefinicaoSalaProvaComponent;
  let fixture: ComponentFixture<DefinicaoSalaProvaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefinicaoSalaProvaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefinicaoSalaProvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
