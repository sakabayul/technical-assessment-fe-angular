import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Employee } from '../../model/data.model';

@Injectable({
  providedIn: 'root'
})
export class SelectedEmployeeService {
  private selectedEmployeeSubject = new BehaviorSubject<Employee | null>(null);
  selectedEmployee$ = this.selectedEmployeeSubject.asObservable();

  constructor() { }

  setSelectedEmployee(employee: Employee): void {
    this.selectedEmployeeSubject.next(employee);
  }
}
