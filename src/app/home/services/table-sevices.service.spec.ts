import { TestBed, inject } from '@angular/core/testing';

import { TableSevicesService } from './table-sevices.service';

describe('TableSevicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TableSevicesService]
    });
  });

  it('should be created', inject([TableSevicesService], (service: TableSevicesService) => {
    expect(service).toBeTruthy();
  }));
});
