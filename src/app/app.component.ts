import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { HeroComponent } from '../components/hero/hero.component';
import { AboutComponent } from '../components/about/about.component';
import { SkillsComponent } from '../components/skills/skills.component';
import { ExperienceComponent } from '../components/experience/experience.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { EducationComponent } from './components/education/education.component';
import { CertificationsComponent } from './components/certifications/certifications.component';
@Component({
  selector: 'app-root',
  standalone: true,
 
  imports: [RouterOutlet,NavbarComponent,HeroComponent,AboutComponent,SkillsComponent,ExperienceComponent,ProjectsComponent,EducationComponent,CertificationsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'praveen-portfolio';
}
