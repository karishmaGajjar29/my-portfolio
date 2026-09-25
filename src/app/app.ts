import { afterNextRender, Component, signal } from '@angular/core';
import { HeaderComponent } from './components/header/header';
import { HeroComponent } from './components/hero/hero';
import { TechStackComponent } from './components/tech-stack/tech-stack';
import { AboutComponent } from './components/about/about';
import { SkillsComponent } from './components/skills/skills';
import { ExperienceComponent } from './components/experience/experience';
import { ProjectsComponent } from './components/projects/projects';
import { EducationComponent } from './components/education/education';
import { ContactComponent } from './components/contact/contact';
import { FooterComponent } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    HeroComponent,
    TechStackComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    ProjectsComponent,
    EducationComponent,
    ContactComponent,
    FooterComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  readonly dark = signal(false);
  constructor() {
    afterNextRender(() => {
      try {
        this.dark.set(localStorage.getItem('portfolio-theme') === 'dark');
      } catch {
        /* Storage is optional. */
      }
    });
  }
  toggleTheme() {
    this.dark.update((value) => !value);
    try {
      localStorage.setItem('portfolio-theme', this.dark() ? 'dark' : 'light');
    } catch {
      /* Theme works without storage. */
    }
  }
}
