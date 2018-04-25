import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestInlineTemplate1Component } from './test-inline-template1.component';

describe('TestInlineTemplate1Component', () => {
  let component: TestInlineTemplate1Component;
  let fixture: ComponentFixture<TestInlineTemplate1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestInlineTemplate1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestInlineTemplate1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
