import { TestBed } from '@angular/core/testing';

import { DefinicaoSalaProvaService } from './definicao-sala-prova.service';

describe('DefinicaoSalaProvaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DefinicaoSalaProvaService = TestBed.get(DefinicaoSalaProvaService);
    expect(service).toBeTruthy();
  });
});
