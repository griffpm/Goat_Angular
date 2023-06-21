import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { shieldGuard } from './shield.guard';

describe('shieldGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => shieldGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
