import { TestBed, inject } from '@angular/core/testing';

import { ModalServicesService } from './modal-services.service';

describe('ModalServicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModalServicesService]
    });
  });

  it('should be created', inject([ModalServicesService], (service: ModalServicesService) => {
    expect(service).toBeTruthy();
  }));
});
