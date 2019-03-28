import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routingModule } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
// TODO: Add http client module

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AppComponent } from './app.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { ListPatientsComponent } from './list-patients/list-patients.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ContactsComponent } from './contacts/contacts.component';
import { DepartmentsComponent } from './departments/departments.component';

import { AuthGuard } from './services/auth-guard.service';
import { LoginService } from './services/login.service';


@NgModule({
  declarations: [
    AppComponent,
    AddPatientComponent,
    ListPatientsComponent,
    UpdatePatientComponent,
    LoginComponent,
    SignupComponent,
    FooterComponent,
    HeaderComponent,
    ContactsComponent,
    DepartmentsComponent
  ],
  imports: [
    BrowserModule,
    routingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [LoginService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
