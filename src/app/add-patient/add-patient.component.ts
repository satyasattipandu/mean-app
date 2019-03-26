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
  constructor(private patientService: PatientService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.patientForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', Validators.required],
      gender:['', Validators.required],
      address:['', Validators.required],
      phone:['', Validators.required],
      consultedBy:['', Validators.required],
      complaints:['', Validators.required]
    });
  }

  // patientForm = new FormGroup({
  //   firstName: new FormControl(),
  //   lastName: new FormControl(),
  //   age: new FormControl(),
  //   gender: new FormControl(),
  //   address: new FormControl(),
  //   phone: new FormControl(),
  //   consultedBy: new FormControl(),
  //   complaints: new FormControl()
  // });

  addPatient(): void {
    this.patientForm.value.views = 0;
    this.newPatient = this.patientForm.value;
    console.log(this.newPatient);
    this.patientService.addPatient(this.newPatient).subscribe((result) => {
      console.log(result);
      this.router.navigate(['/list-patients']);
    }, (err) => {
      console.log(err);
    })
  }
}
