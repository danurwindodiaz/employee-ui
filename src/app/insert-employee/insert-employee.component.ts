import { Component } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insert-employee',
  templateUrl: './insert-employee.component.html',
  styleUrls: ['./insert-employee.component.css', '../app.component.css'],
})
export class InsertEmployeeComponent {
  employee = {
    id: '',
    name: '',
    department: '',
  };
  constructor(private api: EmployeeServiceService, private router: Router) {}

  insertEmployee() {
    this.api.insertEmployee(this.employee).subscribe((response) => {
      this.employee = {
        id: '',
        name: '',
        department: '',
      };
    });
    this.router.navigate(['/']);
  }
}
