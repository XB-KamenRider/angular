
import { Component, Input, OnInit } from '@angular/core';
import { ChildComponent } from './child.component';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

import { Hero } from './hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('heroState', [
      state('inactive', style({
        backgroundColor: '#eee',
        transform: 'scale(1)'
      })),
      state('active',   style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1.1)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
})
export class AppComponent implements OnInit {

  title = 'app';
  color = 'red';
  spa = '123';
  dv = 'yige';
  clickMessage = '';

  expression = true;
  isSpecial = true;

  heroes = [
    { id: 11, name: '苹果手机' },
    { id: 12, name: '亚马逊' },
    { id: 13, name: '谷歌' },
    { id: 14, name: 'Facebook' },
    { id: 15, name: '雅虎' },
    { id: 16, name: '阿里巴巴' },
    { id: 17, name: '淘宝网' },
    { id: 18, name: '京东' },
    { id: 19, name: '小米' },
    { id: 20, name: '腾讯' }
  ];
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
  // name1: '123';

  ngOnInit(): void {
    console.log(123);
    this.setIndex(2);
  }
  onClickMe(val) {
    this.clickMessage = 'You are my hero!';
    console.log(val);
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
