import { TestBed } from '@angular/core/testing';

import { LookupSessionService } from './lookup-session.service';

describe('LookupSessionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LookupSessionService = TestBed.get(LookupSessionService);
    expect(service).toBeTruthy();
  });
});
