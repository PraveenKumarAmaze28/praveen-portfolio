import { Component } from '@angular/core';

interface Project {
  name: string;
  type: string;
  startDate: string;
  endDate: string;
  description: string;
  features: string[];
  technologies: string[];
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  projects: Project[] = [
    {
      name: 'QuadX',
      type: 'Overtime & Payroll Software',
      startDate: 'Sep 2024',
      endDate: 'Jan 2025',
      description:
        'A multi-subsidiary payroll platform built around cost centers and pay groups, with a unified payroll engine and consolidated reporting.',
      features: [
        'Payroll Processing by Cost Center and Pay Group',
        'Unified Employee Reporting',
        'Dynamic Reactive Forms',
        'Role-based Route Protection'
      ],
      technologies: [
        'Angular',
        'ASP.NET Web API',
        'SQL Server',
        'REST APIs'
      ]
    },

    {
      name: 'PlayMate',
      type: 'Overtime & Payroll Software',
      startDate: 'Mar 2024',
      endDate: 'Sep 2024',
      description:
        'A multi-subsidiary payroll platform supporting five companies under a unified payroll engine with consolidated payroll and employee reporting.',
      features: [
        'Multi-Subsidiary Payroll',
        'Cost Center & Pay Group Processing',
        'Unified Employee Reporting',
        'Reactive Forms',
        'Role-based Route Protection'
      ],
      technologies: [
        'Angular',
        'ASP.NET Web API',
        'SQL Server',
        'REST APIs'
      ]
    },

    {
      name: 'Shroff Travels',
      type: 'HRMS & Payroll Software',
      startDate: 'Jan 2024',
      endDate: 'Mar 2024',
      description:
        'A secure HRMS and payroll platform supporting complex overtime, night differential, holiday pay, taxation, statutory deductions and final settlements.',
      features: [
        'Night Differential & Overtime',
        'Holiday Pay Processing',
        'Bi-weekly Payroll',
        'Annualized Tax Computation',
        'AES Data Encryption',
        'Certificate Generation Integration'
      ],
      technologies: [
        'Angular',
        'ASP.NET Web API',
        'SQL Server',
        'REST APIs',
        'AES Encryption'
      ]
    },

    {
      name: 'AC Loans',
      type: 'HRMS & Payroll Software',
      startDate: 'Apr 2023',
      endDate: 'Sep 2023',
      description:
        'A Philippine labor-law-compliant HRMS and payroll platform with integrated loan management, payroll processing and employee self-service.',
      features: [
        'Overtime & LWOP Processing',
        'Government Deductions',
        '13th Month & Final Pay',
        'Loan Amortization',
        'EMI & Interest Calculations',
        'Employee Self-Service Portal'
      ],
      technologies: [
        'Angular',
        'ASP.NET Web API',
        'SQL Server',
        'REST APIs',
        'Data Encryption'
      ]
    },

    {
      name: 'ALI HRIMS',
      type: 'HRMS & Payroll Software',
      startDate: 'Sep 2022',
      endDate: 'Apr 2023',
      description:
        'A Philippine labor-law-compliant HRMS and payroll system covering overtime, LWOP, government deductions, loans and employee self-service.',
      features: [
        'Holiday & Rest Day Overtime',
        'LWOP Calculations',
        'Government Deductions',
        'Loan Approval Workflow',
        'Dynamic Amortization',
        'Employee Self-Service'
      ],
      technologies: [
        'Angular',
        'ASP.NET Web API',
        'SQL Server',
        'API Security',
        'Data Encryption'
      ]
    },

    {
      name: 'Astalakshmi Gold',
      type: 'E-commerce Platform',
      startDate: 'Sep 2021',
      endDate: 'Feb 2022',
      description:
        'An e-commerce platform for purchasing gold and silver products with real-time metal pricing, product comparison, wishlists and secure payments.',
      features: [
        'Real-time Metal Prices',
        'Product Comparison',
        'Wishlist',
        'Secure Payments',
        'Invoice Generation',
        'Order Tracking'
      ],
      technologies: [
        'Angular',
        'Node.js',
        'ASP.NET',
        'SQL',
        'MongoDB'
      ]
    }
  ];

}