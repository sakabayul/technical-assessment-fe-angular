import { TestBed } from '@angular/core/testing';

import { SelectedEmployeeService } from './selected-employee.service';

describe('SelectedEmployeeService', () => {
  let service: SelectedEmployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectedEmployeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
