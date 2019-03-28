import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PatientService } from '../services/patient.service';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {

  newPatient: any;
  patientForm: FormGroup;
  submitted: boolean = false;
  constructor(private patientService: PatientService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.patientForm = this.formBuilder.group({
      firstName: ['', [Validators.required,Validators.pattern('^[a-zA-Z]{3,24}$')]],
      lastName: ['', [Validators.required,Validators.pattern('^[a-zA-Z]{3,24}$')]],
      age: ['', [Validators.required,Validators.pattern('^[0-9]{1,2}$')]],
      gender:['', Validators.required],
      address:['', Validators.required],
      phone:['', [Validators.required,Validators.pattern('^[0-9]{3}-[0-9]{3}-[0-9]{4}$')]],
      consultedBy:['',  [Validators.required,Validators.pattern('^[a-zA-Z]{1,1000}$')]],
      complaints:['', [Validators.required,Validators.pattern('^[a-zA-Z]{1,1000}$')]]
    });
  }

  addPatient(): void {
    this.submitted = !this.submitted;
    this.patientForm.value.views = 0;
    this.newPatient = this.patientForm.value;
    this.patientService.addPatient(this.newPatient).subscribe((result) => {
      this.router.navigate(['/list-patients']);
    }, (err) => {
    })
  }
}
