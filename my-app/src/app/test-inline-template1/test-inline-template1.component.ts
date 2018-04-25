import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-inline-template1',
  template: `
    <p>
      test-inline-template1 works!
    </p>
    <div>
      {{name}}
      {{"Welcome" + name}}
    </div>
    <div>
      {{name.length}}
      {{2+2}}
    </div>
    <div>
      {{getUser()}}
    </div>
    <input id="sel" type="text" value="Vipul" />
    <input [id]="myId" type="text" value="Vipul2" />
  `,
  styleUrls: ['./test-inline-template1.component.css']
})

export class TestInlineTemplate1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public name = "Vipul";
  public myId = "sel2";

  getUser() {
    return "Hello" + this.name;
  }

}
