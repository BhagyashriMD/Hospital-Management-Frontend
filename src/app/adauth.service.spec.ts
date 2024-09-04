import { TestBed } from '@angular/core/testing';

import { AdauthService } from './adauth.service';

describe('AdauthService', () => {
  let service: AdauthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdauthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
