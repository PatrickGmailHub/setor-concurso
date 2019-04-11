import { TestBed } from '@angular/core/testing';

import { SetorConcursoProvaService } from './setor-concurso-prova.service';

describe('SetorConcursoProvaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SetorConcursoProvaService = TestBed.get(SetorConcursoProvaService);
    expect(service).toBeTruthy();
  });
});
