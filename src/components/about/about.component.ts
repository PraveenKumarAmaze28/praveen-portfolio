import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  highlights = [
    'Full Stack Development',
    'REST API Development',
    'SQL Server & Database Design',
    'HRMS & Business Applications',
    'AI & Prompt Engineering'
  ];

}