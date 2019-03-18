import { Component, OnInit } from '@angular/core';
import { PatientService } from '../services/patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-patients',
  templateUrl: './list-patients.component.html',
  styleUrls: ['./list-patients.component.css']
})
export class ListPatientsComponent implements OnInit {

  patients: any = [];
  password: string;
  ID: any;

  constructor(public patientService: PatientService, private router: Router) { }

  ngOnInit() {
    this.getPatients();
  }

  getPatients() {
    this.patients = [];
    // TODO: Make request to get patients and populate patients
  }

  setId(id): void {
    console.log(id);
    this.ID = id;
  }

  deletePatient(): void {
    if (this.password === "1234") {
      // TODO: Make request to delete patient and redirect to patient list on success
    } else {
      // TODO: Show alert informing user of wrong password and then redirect to list of patients
    }
  }

}
