import { TestBed } from '@angular/core/testing';

import { ProductListApplicationService } from './product-list-application.service';

describe('ProductListApplicationService', () => {
  let service: ProductListApplicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductListApplicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
