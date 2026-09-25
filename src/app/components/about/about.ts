import { Component } from '@angular/core';
import { portfolio } from '../../portfolio.data';

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class AboutComponent {
  readonly data = portfolio;
}
