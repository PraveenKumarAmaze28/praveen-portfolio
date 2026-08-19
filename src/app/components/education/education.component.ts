import { Component } from '@angular/core';

interface Education {
  degree: string;
  institution: string;
  period: string;
  description?: string;
}

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {

 education: Education[] = [
  {
    degree: 'B.E. - Bachelor of Engineering, Computer Science',
    institution: 'Cambridge Institute of Technology',
    period: 'Jul 2016 – Sep 2020',
    description: 'Computer Science Engineering'
  },
  {
    degree: '2nd PUC, Computer Science',
    institution: 'Basaveshwara College of Arts, Science and Commerce',
    period: 'Jun 2014 – Jun 2016',
    description: 'Grade: First Class'
  },
  {
    degree: '10th, State Board',
    institution: 'Morning Star English School',
    period: 'Apr 2002 – Apr 2014',
    description: 'Grade: First Class'
  }
];

}