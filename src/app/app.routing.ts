import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ListPatientsComponent } from './list-patients/list-patients.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { ContactsComponent } from './contacts/contacts.component';
import { DepartmentsComponent } from './departments/departments.component';
import { AuthGuard } from './services/auth-guard.service';

const routes: Routes = [
  { path: '',  redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'list-patients', component: ListPatientsComponent, canActivate: [AuthGuard] },
  { path: 'add-patient', component:AddPatientComponent, canActivate: [AuthGuard] },
  { path: 'update-patient/:id', component: UpdatePatientComponent, canActivate: [AuthGuard] },
  { path: 'contacts', component: ContactsComponent, canActivate: [AuthGuard] },
  { path: 'departments', component: DepartmentsComponent, canActivate: [AuthGuard] }
];

export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);
