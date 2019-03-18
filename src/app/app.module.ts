import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routingModule } from './app.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// TODO: Add http client module

import { AppComponent } from './app.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { ListPatientsComponent } from './list-patients/list-patients.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';

@NgModule({
  declarations: [
    AppComponent,
    AddPatientComponent,
    ListPatientsComponent,
    UpdatePatientComponent
  ],
  imports: [
    BrowserModule,
    routingModule,
    FormsModule,
    // TODO: Add http cliet module here...
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
