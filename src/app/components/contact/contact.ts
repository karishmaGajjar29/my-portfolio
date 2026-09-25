import { Component, signal } from '@angular/core';
import { portfolio } from '../../portfolio.data';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class ContactComponent {
  readonly data = portfolio;
  readonly copyStatus = signal('');
  async copyEmail() {
    try {
      await navigator.clipboard.writeText(this.data.email);
      this.copyStatus.set('Email copied!');
    } catch {
      this.copyStatus.set('Please select the email address to copy it.');
    }
  }
}
