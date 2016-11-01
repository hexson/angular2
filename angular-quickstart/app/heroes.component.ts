import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { Hero } from './hero';
import { HeroService } from './hero.service';


@Component({
  moduleId: module.id,
  selector: 'heroes',
  styleUrls: [ 'heroes.component.css' ],
  templateUrl: 'heroes.component.html'
})

export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  };

  constructor(
    private router: Router,
    private heroService: HeroService
  ) {}
  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  ngOnInit(): void {
    this.getHeroes();
  }
  gotoDetail(hero: Hero): void {
    let link = ['/detail', hero.id];
    this.router.navigate(link);
  }
}