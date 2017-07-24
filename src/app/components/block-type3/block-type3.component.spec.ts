import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockType3Component } from './block-type3.component';

describe('BlockType3Component', () => {
  let component: BlockType3Component;
  let fixture: ComponentFixture<BlockType3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockType3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockType3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
