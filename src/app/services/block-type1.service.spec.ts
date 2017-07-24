import { TestBed, inject } from '@angular/core/testing';

import { BlockType1Service } from './block-type1.service';

describe('BlockType1Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BlockType1Service]
    });
  });

  it('should be created', inject([BlockType1Service], (service: BlockType1Service) => {
    expect(service).toBeTruthy();
  }));
});
