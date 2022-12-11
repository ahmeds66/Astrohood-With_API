import { TestBed } from '@angular/core/testing';

import { RocketGuard } from './rocket.guard';

describe('RocketGuard', () => {
  let guard: RocketGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RocketGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
