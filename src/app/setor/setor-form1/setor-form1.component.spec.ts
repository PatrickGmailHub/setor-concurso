import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetorForm1Component } from './setor-form1.component';

describe('SetorForm1Component', () => {
  let component: SetorForm1Component;
  let fixture: ComponentFixture<SetorForm1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetorForm1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetorForm1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
