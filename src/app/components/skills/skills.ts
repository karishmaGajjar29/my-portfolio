import { Component } from '@angular/core';
import { portfolio } from '../../portfolio.data';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class SkillsComponent {
  readonly data = portfolio;
}
