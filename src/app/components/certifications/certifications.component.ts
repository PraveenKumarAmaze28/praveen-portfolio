import { Component } from '@angular/core';

interface Certification {
  name: string;
  issuer: string;
  year: string;
  description: string;
}

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [],
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.css'
})
export class CertificationsComponent {

  certifications: Certification[] = [
    {
      name: 'Google Prompting Essentials',
      issuer: 'Google',
      year: '2026',
      description:
        'Completed training in prompt engineering techniques including structured prompting, prompt refinement, iterative prompting, prompt chaining and effective AI interaction.'
    }
  ];

}