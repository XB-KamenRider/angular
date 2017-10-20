import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { Router } from '@angular/router';

import { HeroService } from './hero.service';

@Component({
  selector: 'my-heroes',
  // template: `<h1>{{title}}</h1><h2>{{hero.name}} details!</h2>
  // <div>{{hero.id}}和{{hero.name}}</div>`,
  // styles: [],
  styleUrls: ['./app.component.css'],
  templateUrl: './heroes.component.html',  // 与template只能使用一个以最后一个为准
})

export class HeroesComponent implements OnInit {
  title= 'my frist angular';
  heroes: Hero[];
  selectedHero: Hero;
  constructor(
    private router: Router,
    private heroService: HeroService) { }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    // this.gotoDetail();
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
