import { TestBed, inject } from '@angular/core/testing';

import { BlockType3Service } from './block-type3.service';

describe('BlockType3Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BlockType3Service]
    });
  });

  it('should be created', inject([BlockType3Service], (service: BlockType3Service) => {
    expect(service).toBeTruthy();
  }));
});
