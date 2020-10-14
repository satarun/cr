import { TestBed } from '@angular/core/testing';

import { CrService } from './cr.service';

describe('CrService', () => {
  let service: CrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
