import { TestBed } from '@angular/core/testing';

import { LocalDeProvaService } from './local-de-prova.service';

describe('LocalDeProvaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LocalDeProvaService = TestBed.get(LocalDeProvaService);
    expect(service).toBeTruthy();
  });
});
