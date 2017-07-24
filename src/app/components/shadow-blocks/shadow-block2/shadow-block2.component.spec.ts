import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShadowBlock2Component } from './shadow-block2.component';

describe('ShadowBlock2Component', () => {
  let component: ShadowBlock2Component;
  let fixture: ComponentFixture<ShadowBlock2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShadowBlock2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShadowBlock2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
