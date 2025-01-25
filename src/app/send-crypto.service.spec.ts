import { TestBed } from '@angular/core/testing';

import { SendCryptoService } from './send-crypto.service';

describe('SendCryptoService', () => {
  let service: SendCryptoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SendCryptoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
