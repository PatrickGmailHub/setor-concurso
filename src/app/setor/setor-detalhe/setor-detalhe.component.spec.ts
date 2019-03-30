import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetorDetalheComponent } from './setor-detalhe.component';

describe('SetorDetalheComponent', () => {
  let component: SetorDetalheComponent;
  let fixture: ComponentFixture<SetorDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetorDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetorDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
