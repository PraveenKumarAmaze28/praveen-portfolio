import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  navItems = [
    { label: 'About', section: 'about' },
    { label: 'Skills', section: 'skills' },
    { label: 'Experience', section: 'experience' },
    { label: 'Projects', section: 'projects' },
    { label: 'Education', section: 'education' },
    { label: 'Contact', section: 'contact' }
  ];

}