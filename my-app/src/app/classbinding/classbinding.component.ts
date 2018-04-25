import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classbinding',
  template: `
    <p>
      classbinding works1!
    </p>
    <div [class]="success">Test Success</div>
    <div [class.test-error]="hasError">Test Error</div>
    <div [ngClass]="msgClass"> msgClass </div>

    <div></div>
    <div>Style Binding</div>
    <div style="color:orange'">Orange</div>
    <div [style.color]="hasError ? 'yellow' : orange">Orange</div>


    <div></div>
    <div>Event Binding</div>
    <button #myButton (click)=onClickFun(myButton)>Button</button>
    <div>{{welcomeMsg}}</div>
  `,
  styleUrls: ['./classbinding.component.css']
})
export class ClassbindingComponent implements OnInit {
  
  public success= 'test-success';
  public hasError = true;
  public orange= 'orange';
  public welcomeMsg = 'Welcome';
  public name = 'Vipul';

  public msgClass = {
    'test-success': !this.hasError,
    'test-error': this.hasError,
    'test-italic': true
  }

  constructor() { }

  ngOnInit() {
  }

  onClickFun(e, param1) {
    console.log('call comes here', e);
    this.welcomeMsg += this.name;
  }

}
