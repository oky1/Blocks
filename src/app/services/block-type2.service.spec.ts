import { TestBed, inject } from '@angular/core/testing';

import { BlockType2Service } from './block-type2.service';

describe('BlockType2Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BlockType2Service]
    });
  });

  it('should be created', inject([BlockType2Service], (service: BlockType2Service) => {
    expect(service).toBeTruthy();
  }));
});
