import { Component, OnInit } from '@angular/core';
import { PatientService } from '../services/patient.service';
import { Router } from '@angular/router';
import { e } from '@angular/core/src/render3';

@Component({
  selector: 'app-list-patients',
  templateUrl: './list-patients.component.html',
  styleUrls: ['./list-patients.component.css']
})
export class ListPatientsComponent implements OnInit {
  p: number = 1;
  collection: any[];
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
      this.collection = response;
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
    let userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if (this.password === userInfo['password']) {
      // TODO: Make request to delete patient and redirect to patient list on success
      this.patientService.deletePatient(this.ID).subscribe(response => {
        this.patients.splice(this.index, 1);
      })
    } else {
      // TODO: Show alert informing user of wrong password and then redirect to list of patients
      alert('your password is incorrect');
      this.router.navigate(['list-patients']);
    }
  }

  onSearchChange(searchText) {
    if (searchText.length > 0) {
      this.patients = this.patients.filter(patient => {
        return (patient.firstName.toLowerCase()).startsWith(searchText.toLowerCase());
      });
    } else {
      this.patients = this.collection;
    }
  }
}
