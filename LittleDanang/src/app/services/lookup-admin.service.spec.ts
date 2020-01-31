import { TestBed } from '@angular/core/testing';

import { LookupAdminService } from './lookup-admin.service';

describe('LookupAdminService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LookupAdminService = TestBed.get(LookupAdminService);
    expect(service).toBeTruthy();
  });
});
