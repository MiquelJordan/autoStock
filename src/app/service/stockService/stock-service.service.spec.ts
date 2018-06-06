import { TestBed, inject } from '@angular/core/testing';

import { StockService } from './stock.service';

describe('StockServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StockService]
    });
  });

  it('should be created', inject([StockService], (service: StockService) => {
    expect(service).toBeTruthy();
  }));
});
