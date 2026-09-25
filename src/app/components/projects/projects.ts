import { Component } from '@angular/core';
import { portfolio } from '../../portfolio.data';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class ProjectsComponent {
  readonly data = portfolio;
}
