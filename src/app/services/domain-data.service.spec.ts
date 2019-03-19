import { TestBed } from '@angular/core/testing';

import { DomainDataService } from './domain-data.service';

describe('DomainDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DomainDataService = TestBed.get(DomainDataService);
    expect(service).toBeTruthy();
  });
});
