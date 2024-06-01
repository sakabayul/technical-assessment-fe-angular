import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../../model/data.model';
import { SelectedEmployeeService } from '../../auth/service/selected-employee.service';
import { employees } from '../../data/employees.data'; // Import data karyawan

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  employee!: Employee | null;

  constructor(
    private route: ActivatedRoute,
    private employeeService: SelectedEmployeeService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const username = params['username'];
      const employee = employees.find((emp: Employee) => emp.username === username); // Type declaration here
      if (employee) {
        this.employeeService.setSelectedEmployee(employee);
      }
    });

    this.employeeService.selectedEmployee$.subscribe((employee: Employee | null) => {
      this.employee = employee;
    });
  }
}
