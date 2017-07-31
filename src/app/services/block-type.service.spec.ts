import { TestBed, inject } from '@angular/core/testing';

import { BlockTypeService } from './block-type.service';

describe('BlockTypeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BlockTypeService]
    });
  });

  it('should be created', inject([BlockTypeService], (service: BlockTypeService) => {
    expect(service).toBeTruthy();
  }));
});
