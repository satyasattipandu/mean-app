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
  index: any;
  constructor(public patientService: PatientService, private router: Router) { }

  ngOnInit() {
    this.getPatients();
  }

  getPatients() {
    this.patients = [];
    this.patientService.getPatients().subscribe(response => {
      this.patients = response;
    })
    // TODO: Make request to get patients and populate patients
  }
  addPatient() {

    this.router.navigate(['add-patient']);
  }
  setId(id, index): void {
    console.log(id);
    this.ID = id;
    this.index = index;
  }

  deletePatient(): void {
    if (this.password === "1234") {
      // TODO: Make request to delete patient and redirect to patient list on success
      this.patientService.deletePatient(this.ID).subscribe(response => {
        this.patients.splice(this.index, 1);
      })
    } else {
      // TODO: Show alert informing user of wrong password and then redirect to list of patients
    }
  }

}
