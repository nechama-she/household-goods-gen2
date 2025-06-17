import { TestBed } from '@angular/core/testing';

import { JsonldscriptService } from './jsonldscript.service';

describe('JsonldscriptService', () => {
  let service: JsonldscriptService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsonldscriptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
