import { TestBed, inject } from '@angular/core/testing';

import { TestExtService } from './test-ext.service';

describe('TestExtService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestExtService]
    });
  });

  it('should be created', inject([TestExtService], (service: TestExtService) => {
    expect(service).toBeTruthy();
  }));
});
