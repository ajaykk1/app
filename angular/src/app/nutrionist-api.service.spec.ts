import { TestBed } from '@angular/core/testing';

import { NutrionistApiService } from './nutrionist-api.service';

describe('NutrionistApiService', () => {
  let service: NutrionistApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NutrionistApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
