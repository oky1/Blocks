import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockType2Component } from './block-type2.component';

describe('BlockType2Component', () => {
  let component: BlockType2Component;
  let fixture: ComponentFixture<BlockType2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockType2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockType2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
