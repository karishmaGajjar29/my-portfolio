import { Component } from '@angular/core';
import { portfolio } from '../../portfolio.data';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.html',
  styleUrl: './languages.css',
})
export class LanguagesComponent {
  readonly data = portfolio;
}
