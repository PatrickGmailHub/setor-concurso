import { TestBed } from '@angular/core/testing';

import { DistribuicaoSalaProvaService } from './distribuicao-sala-prova.service';

describe('DistribuicaoSalaProvaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DistribuicaoSalaProvaService = TestBed.get(DistribuicaoSalaProvaService);
    expect(service).toBeTruthy();
  });
});
