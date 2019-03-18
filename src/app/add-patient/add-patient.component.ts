import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PatientService } from '../services/patient.service';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {

  newPatient: any;

  constructor(private patientService: PatientService, private router: Router) { }

  ngOnInit() {
  }

  patientForm = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    age: new FormControl(),
    gender: new FormControl(),
    address: new FormControl(),
    phone: new FormControl(),
    consultedBy: new FormControl(),
    complains: new FormControl()
  });

  addPatient(): void {
    this.patientForm.value.views = 0;
    this.newPatient = this.patientForm.value;
    /*this.patientService.addPatient(this.newPatient).subscribe((result) => {
      this.router.navigate(['/list-patients']);
    }, (err) => {
      console.log(err);
    })*/
  }
}
