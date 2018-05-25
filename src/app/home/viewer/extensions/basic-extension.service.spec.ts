import { TestBed, inject } from '@angular/core/testing';

import { BasicExtension } from './basic-extension.service';

describe('BasicExtension', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BasicExtension]
    });
  });

  it('should be created', inject([BasicExtension], (service: BasicExtension) => {
    expect(service).toBeTruthy();
  }));
});
