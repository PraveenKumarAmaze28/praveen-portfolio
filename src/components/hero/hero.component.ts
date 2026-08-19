import { Component } from '@angular/core';

interface Technology {
  name: string;
  icon: string;
}

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  technologies: Technology[] = [
    {
      name: 'Angular',
      icon: 'devicon-angular-plain'
    },
    {
      name: 'NestJS',
      icon: 'devicon-nestjs-plain colored'
    },
    {
      name: 'SQL Server',
      icon: 'devicon-microsoftsqlserver-plain colored'
    },
    {
      name: '.NET',
      icon: 'devicon-dotnetcore-plain colored'
    },
    {
      name: 'TypeScript',
      icon: 'devicon-typescript-plain colored'
    },
    {
      name: 'JavaScript',
      icon: 'devicon-javascript-plain colored'
    }
  ];

  stats = [
    {
      value: '5+',
      label: 'Years Experience',
      icon: '💼'
    },
    {
      value: '20+',
      label: 'Projects Completed',
      icon: '⌘'
    },
    {
      value: 'Enterprise',
      label: 'Applications',
      icon: '👥'
    }
  ];

}