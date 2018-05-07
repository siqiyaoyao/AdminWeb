import { TestBed, inject } from '@angular/core/testing';

import { O1Service } from './o1.service';

describe('O1Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [O1Service]
    });
  });

  it('should be created', inject([O1Service], (service: O1Service) => {
    expect(service).toBeTruthy();
  }));
});
