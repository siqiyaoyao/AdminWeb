import { TestBed, inject } from '@angular/core/testing';

import { Table2SevicesService } from './table2-sevices.service';

describe('Table2SevicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Table2SevicesService]
    });
  });

  it('should be created', inject([Table2SevicesService], (service: Table2SevicesService) => {
    expect(service).toBeTruthy();
  }));
});
