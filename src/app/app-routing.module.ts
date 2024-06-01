import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AddEmployeeComponent } from './pages/add-employee/add-employee.component';
import { EmployeeDetailComponent } from './pages/employee-detail/employee-detail.component';
import { AuthGuard } from './auth/guard/auth.guard';
import { LoginGuard } from './auth/guard/login.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, canActivate: [LoginGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'dashboard/add-employee', component: AddEmployeeComponent, canActivate: [AuthGuard] },
  { path: 'dashboard/employee-detail/:username', component: EmployeeDetailComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
