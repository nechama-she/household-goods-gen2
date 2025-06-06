import { TestBed } from '@angular/core/testing';

import { CityContentService } from './city-content.service';

describe('CityContentService', () => {
  let service: CityContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CityContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
