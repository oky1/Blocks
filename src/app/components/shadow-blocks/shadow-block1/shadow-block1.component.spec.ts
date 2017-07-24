import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShadowBlock1Component } from './shadow-block1.component';

describe('ShadowBlock1Component', () => {
  let component: ShadowBlock1Component;
  let fixture: ComponentFixture<ShadowBlock1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShadowBlock1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShadowBlock1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
