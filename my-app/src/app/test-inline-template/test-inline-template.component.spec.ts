import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestInlineTemplateComponent } from './test-inline-template.component';

describe('TestInlineTemplateComponent', () => {
  let component: TestInlineTemplateComponent;
  let fixture: ComponentFixture<TestInlineTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestInlineTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestInlineTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
