import { TestBed } from '@angular/core/testing';

import { PeriodicalsService } from './periodicals.service';

describe('PeriodicalsService', () => {
  let service: PeriodicalsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeriodicalsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
