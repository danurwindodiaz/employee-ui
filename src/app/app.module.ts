import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { InsertEmployeeComponent } from './insert-employee/insert-employee.component';

const routes: Routes = [
  { path: '', component: ListEmployeeComponent },
  { path: 'edit/:id', component: UpdateEmployeeComponent },
  { path: 'add', component: InsertEmployeeComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeeComponent,
    UpdateEmployeeComponent,
    InsertEmployeeComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
