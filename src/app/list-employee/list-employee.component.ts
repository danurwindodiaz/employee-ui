import { Component } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';
@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css', '../app.component.css'],
})
export class ListEmployeeComponent {
  employees: any;

  constructor(private api: EmployeeServiceService) {}

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees() {
    this.api.getEmployee().subscribe((data: any) => {
      this.employees = data;
    });
  }
}
