import { TestBed } from '@angular/core/testing';

import { PreviousOrdersListService } from './previous-orders-list.service';

describe('PreviousOrdersListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PreviousOrdersListService = TestBed.get(PreviousOrdersListService);
    expect(service).toBeTruthy();
  });
});
