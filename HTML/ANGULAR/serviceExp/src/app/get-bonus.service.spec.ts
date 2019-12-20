import { TestBed } from '@angular/core/testing';

import { GetBonusService } from './get-bonus.service';

describe('GetBonusService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetBonusService = TestBed.get(GetBonusService);
    expect(service).toBeTruthy();
  });
});
