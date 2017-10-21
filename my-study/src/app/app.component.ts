
import { Component, Input, OnInit } from '@angular/core';
import { ChildComponent } from './child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  color = 'red';
  expression = true;
  isSpecial = true;
  spa = "123";
  dv = "yige";
  list = [
    {
      name: 'Tour of Heroes',
      url: 'https://angular.io/tutorial'
    }, {
      name: 'CLI Documentation',
      url: 'https://github.com/angular/angular-cli/wiki'
    }, {
      name: 'Angular blog',
      url: 'https://blog.angular.io/'
    }
  ];
  name: '123';

  ngOnInit(): void {
    console.log(123);
    this.setIndex(2);
  }

  setIndex(index): void {
    console.log(index);
  }

  setUppercaseName(event): void {
    console.log(event);
  }

  onVoted(val): void {
    console.log(val);
    this.spa = val;
  }

  onsetIndex(index): void {
    console.log(index, 123);
  }
}
