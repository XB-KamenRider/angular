
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'child-component',
  template: `
    <div>{{spa}} ++ </div>
    <input #inp [(ngModel)]="spa" (input)="vote(inp.value)">
    <div [style.color] = "'red'">{{dv}}</div>
    <button (click)="setIndex(fil)">点击</button>
  `
})

export class ChildComponent {

  @Input() spa;
  @Input() dv;
  @Output() onVoted = new EventEmitter();
  @Output() onsetIndex = new EventEmitter();

  fil = "lol";
  vote(agreed) {
    this.onVoted.emit(agreed);
  }
  setIndex(i) {
    console.log(i);
    this.onsetIndex.emit(i);
  }
}
