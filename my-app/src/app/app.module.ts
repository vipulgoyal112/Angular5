import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { TestInlineTemplateComponent } from './test-inline-template/test-inline-template.component';
import { TestInlineTemplate1Component } from './test-inline-template1/test-inline-template1.component';
import { ClassbindingComponent } from './classbinding/classbinding.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    TestInlineTemplateComponent,
    TestInlineTemplate1Component,
    ClassbindingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
