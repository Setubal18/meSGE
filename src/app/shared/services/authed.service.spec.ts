import { TestBed } from '@angular/core/testing';

import { AuthedService } from './authed.service';

describe('AuthedService', () => {
  let service: AuthedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
