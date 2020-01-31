import { TestBed } from '@angular/core/testing';

import { InitinfoService } from './initinfo.service';

describe('InitinfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InitinfoService = TestBed.get(InitinfoService);
    expect(service).toBeTruthy();
  });
});
