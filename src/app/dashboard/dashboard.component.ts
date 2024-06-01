import { Component } from '@angular/core';
import { Employee } from '../data.model';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  employees: Employee[] = [
    {
      username: 'john_doe',
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      birthDate: new Date('1990-01-01'),
      basicSalary: 50000,
      status: 'Active',
      group: 'IT',
      description: 'Lorem ipsum dolor sit amet'
    },
    {
      username: 'jane_smith',
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jane.smith@example.com',
      birthDate: new Date('1985-05-15'),
      basicSalary: 60000,
      status: 'Active',
      group: 'HR',
      description: 'Consectetur adipiscing elit'
    },
    {
      username: 'alice_walker',
      firstName: 'Alice',
      lastName: 'Walker',
      email: 'alice.walker@example.com',
      birthDate: new Date('1988-10-20'),
      basicSalary: 55000,
      status: 'Inactive',
      group: 'Finance',
      description: 'Sed do eiusmod tempor incididunt'
    },
    {
      username: 'bob_jones',
      firstName: 'Bob',
      lastName: 'Jones',
      email: 'bob.jones@example.com',
      birthDate: new Date('1992-03-12'),
      basicSalary: 48000,
      status: 'Probation',
      group: 'Marketing',
      description: 'Ut enim ad minim veniam'
    },
    {
      username: 'emma_thompson',
      firstName: 'Emma',
      lastName: 'Thompson',
      email: 'emma.thompson@example.com',
      birthDate: new Date('1983-08-28'),
      basicSalary: 70000,
      status: 'Contract',
      group: 'Admin',
      description: 'Quis nostrud exercitation ullamco'
    }
  ];

  constructor(private authService: AuthService) { }

  logout(): void {
    this.authService.logout();
  }
}
