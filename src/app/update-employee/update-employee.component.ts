import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css', '../app.component.css'],
})
export class UpdateEmployeeComponent implements OnInit {
  employee: any;
  id: any;

  constructor(
    private api: EmployeeServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getEmployee();
  }

  getEmployee() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.api.getDetailEmployee(this.id).subscribe((data: any) => {
      this.employee = data;
    });
  }

  updateEmployee(data: any) {
    this.api.updateEmployee(data).subscribe((data: any) => {
      this.employee = data;
    });
    this.router.navigate(['/']);
  }

  deleteEmployee(id: string) {
    this.api.deleteEmployee(id).subscribe((data: any) => {
      this.employee = data;
    });
    this.router.navigate(['/']);
  }
}
