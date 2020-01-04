import { TestBed } from '@angular/core/testing';

import { GuitarCalcService } from './guitar-calc.service';

describe('GuitarCalcService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GuitarCalcService = TestBed.get(GuitarCalcService);
    expect(service).toBeTruthy();
  });
});
