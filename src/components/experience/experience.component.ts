import { Component } from '@angular/core';

interface Experience {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string;
  technologies: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {

  experiences: Experience[] = [
    {
      company: 'Amaze Inc',
      role: 'Senior Software Developer',
      startDate: 'Jan 2024',
      endDate: 'Present',
      location: 'Bengaluru, Karnataka, India',
      description:
        'Developing and maintaining business applications across frontend, backend and database layers, with a focus on scalable APIs, business logic and enterprise applications.',
      technologies: [
        'Angular',
        'NestJS',
        '.NET',
        'SQL Server'
      ]
    },
    {
      company: 'Amaze Inc',
      role: 'Junior Software Engineer',
      startDate: 'Jan 2023',
      endDate: 'Jan 2024',
      location: 'Bengaluru, Karnataka, India',
      description:
        'Worked on application development, backend services and database-related tasks while contributing to business application features and enhancements.',
      technologies: [
        '.NET',
        'SQL Server',
        'REST APIs'
      ]
    },
    {
      company: 'Amaze Inc',
      role: 'Software Developer - Trainee',
      startDate: 'Jan 2021',
      endDate: 'Jan 2023',
      location: 'India',
      description:
        'Started my software development journey by working on application development, learning backend technologies and contributing to enterprise software projects.',
      technologies: [
        '.NET',
        'SQL Server'
      ]
    }
  ];

}