import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShadowBlock3Component } from './shadow-block3.component';

describe('ShadowBlock3Component', () => {
  let component: ShadowBlock3Component;
  let fixture: ComponentFixture<ShadowBlock3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShadowBlock3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShadowBlock3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
