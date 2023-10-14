import { TestBed } from '@angular/core/testing';

import { DiaLibreService } from './dia-libre.service';

describe('DiaLibreService', () => {
  let service: DiaLibreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiaLibreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
