import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  test: any;

  constructor(private heroService: HeroService) { }

  async ngOnInit() {
    this.getHeroes();
    console.log('bla');
  }

  async getHeroes() {
    this.heroes = await this.heroService.getHeroes().toPromise();
  }

  async onClick() {
    this.test = await this.heroService.getTest().toPromise();
  }
}
