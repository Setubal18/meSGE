import { TestBed } from '@angular/core/testing';

import { HowIsGuard } from './how-is.guard';

describe('HowIsGuard', () => {
  let guard: HowIsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(HowIsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
