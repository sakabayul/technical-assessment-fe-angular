import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})

export class AddEmployeeComponent implements OnInit {
  employeeForm: FormGroup;
  today: string = new Date().toISOString().split('T')[0];
  groups: string[] = ['IT', 'HR', 'Finance', 'Marketing', 'Admin', 'Sales', 'Operations', 'Support', 'Group 9', 'Group 10'];

  constructor(private fb: FormBuilder, private router: Router) {
    this.employeeForm = this.fb.group({
      username: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      birthDate: ['', [Validators.required, this.birthDateValidator]],
      basicSalary: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      status: ['', Validators.required],
      group: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  birthDateValidator(control: any) {
    const birthDate = new Date(control.value);
    const today = new Date();
    return birthDate > today ? { invalidDate: true } : null;
  }

  onSubmit() {
    if (this.employeeForm.valid) {
      // Simpan data employee
      console.log(this.employeeForm.value);
      // Navigasi ke halaman dashboard
      this.router.navigate(['/dashboard']);
    }
  }

  onCancel() {
    this.router.navigate(['/dashboard']);
  }
}
