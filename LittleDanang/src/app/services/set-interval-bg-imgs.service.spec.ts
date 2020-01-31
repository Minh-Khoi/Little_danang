import { TestBed } from '@angular/core/testing';

import { SetIntervalBgImgsService } from './set-interval-bg-imgs.service';

describe('SetIntervalBgImgsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SetIntervalBgImgsService = TestBed.get(SetIntervalBgImgsService);
    expect(service).toBeTruthy();
  });
});
