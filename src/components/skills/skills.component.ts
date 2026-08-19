import { Component } from '@angular/core';

interface Skill {
  name: string;
  icon: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {

  skillGroups = [
    {
      title: 'Frontend',
      skills: [
        {
          name: 'Angular',
          icon: 'devicon-angular-plain'
        },
        {
          name: 'TypeScript',
          icon: 'devicon-typescript-plain colored'
        },
        {
          name: 'JavaScript',
          icon: 'devicon-javascript-plain colored'
        },
        {
          name: 'HTML5',
          icon: 'devicon-html5-plain colored'
        },
        {
          name: 'CSS3',
          icon: 'devicon-css3-plain colored'
        }
      ]
    },

    {
      title: 'Backend',
      skills: [
        {
          name: 'NestJS',
          icon: 'devicon-nestjs-plain colored'
        },
        {
          name: '.NET',
          icon: 'devicon-dotnetcore-plain colored'
        }
      ]
    },

    {
      title: 'Database',
      skills: [
        {
          name: 'SQL Server',
          icon: 'devicon-microsoftsqlserver-plain colored'
        }
      ]
    },

    {
      title: 'Tools & Technologies',
      skills: [
        {
          name: 'Git',
          icon: 'devicon-git-plain colored'
        },
        {
          name: 'GitHub',
          icon: 'devicon-github-original'
        },
        {
          name: 'Playwright',
          icon: 'devicon-playwright-plain colored'
        }
      ]
    }
  ];

}