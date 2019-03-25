import { TestBed } from '@angular/core/testing';

import { InfrastructureNodeListService } from './infrastructure-node-list.service';

describe('InfrastructureNodeListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InfrastructureNodeListService = TestBed.get(InfrastructureNodeListService);
    expect(service).toBeTruthy();
  });
});
