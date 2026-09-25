import { Component } from '@angular/core';
import { portfolio } from '../../portfolio.data';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class ExperienceComponent {
  readonly data = portfolio;
}
