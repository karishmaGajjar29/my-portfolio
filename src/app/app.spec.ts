import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('Portfolio', () => {
  beforeEach(async () => {
    localStorage.clear();
    await TestBed.configureTestingModule({ imports: [App] }).compileComponents();
  });
  it('renders resume content and valid section links', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const page = fixture.nativeElement as HTMLElement;
    expect(page.querySelector('h1')?.textContent).toContain('Creative mind.');
    expect(page.querySelector('.intro')?.textContent).toContain('Karishma Gajjar');
    expect(page.querySelectorAll('.project-card')).toHaveLength(7);
    for (const link of page.querySelectorAll<HTMLAnchorElement>('a[href^="#"]')) {
      expect(page.querySelector(link.getAttribute('href')!)).toBeTruthy();
    }
    expect(page.querySelector('a[download]')).toBeNull();
    expect(page.querySelector<HTMLAnchorElement>('a[href^="mailto:"]')?.href).toContain(
      'karishmagajjar2903@gmail.com',
    );
  });
  it('closes the menu after navigation and Escape', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const page = fixture.nativeElement as HTMLElement;
    const menu = page.querySelector<HTMLButtonElement>('#menu-toggle')!;
    menu.click();
    fixture.detectChanges();
    expect(menu.getAttribute('aria-expanded')).toBe('true');
    page.querySelector<HTMLAnchorElement>('.nav-links a')!.click();
    fixture.detectChanges();
    expect(menu.getAttribute('aria-expanded')).toBe('false');
    menu.click();
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    fixture.detectChanges();
    expect(menu.getAttribute('aria-expanded')).toBe('false');
  });
  it('restores and saves theme preference', async () => {
    localStorage.setItem('portfolio-theme', 'dark');
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    fixture.detectChanges();
    const page = fixture.nativeElement as HTMLElement;
    expect(page.querySelector('.portfolio.dark')).toBeTruthy();
    page.querySelector<HTMLButtonElement>('[aria-label="Switch to light theme"]')!.click();
    fixture.detectChanges();
    expect(page.querySelector('.portfolio.dark')).toBeNull();
    expect(localStorage.getItem('portfolio-theme')).toBe('light');
  });
});
