import { TestBed } from '@angular/core/testing';

import { EtapaProvaService } from './etapa-prova.service';

describe('EtapaProvaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EtapaProvaService = TestBed.get(EtapaProvaService);
    expect(service).toBeTruthy();
  });
});
