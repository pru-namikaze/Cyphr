import { TestBed } from '@angular/core/testing';

import { EncodingDecodingService } from './encoding-decoding.service';

describe('EncodingDecodingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EncodingDecodingService = TestBed.get(EncodingDecodingService);
    expect(service).toBeTruthy();
  });
});
