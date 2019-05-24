import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistribuicaoSalaProvaComponent } from './distribuicao-sala-prova.component';

describe('DistribuicaoSalaProvaComponent', () => {
  let component: DistribuicaoSalaProvaComponent;
  let fixture: ComponentFixture<DistribuicaoSalaProvaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistribuicaoSalaProvaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistribuicaoSalaProvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
