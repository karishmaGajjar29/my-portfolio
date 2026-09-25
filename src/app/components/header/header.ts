import { Component, input, output, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrl: './header.css',
  host: { '(document:keydown.escape)': 'closeMenu()' },
})
export class HeaderComponent {
  readonly dark = input(false);
  readonly themeToggle = output<void>();
  readonly menuOpen = signal(false);
  readonly navigation = ['About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact'];
  toggleMenu() {
    this.menuOpen.update((open) => !open);
  }
  closeMenu() {
    if (this.menuOpen()) {
      this.menuOpen.set(false);
      document.getElementById('menu-toggle')?.focus();
    }
  }
}
