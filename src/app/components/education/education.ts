import { Component } from '@angular/core';
import { portfolio } from '../../portfolio.data';
import { LanguagesComponent } from '../languages/languages';

@Component({
  selector: 'app-education',
  templateUrl: './education.html',
  styleUrl: './education.css',
  imports: [LanguagesComponent],
})
export class EducationComponent {
  readonly data = portfolio;
}
