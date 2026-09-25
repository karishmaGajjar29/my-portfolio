import { Component } from '@angular/core';
import { portfolio } from '../../portfolio.data';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class HeroComponent {
  readonly data = portfolio;
}
