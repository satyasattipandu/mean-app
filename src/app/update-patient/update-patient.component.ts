import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { PatientService } from '../services/patient.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrls: ['./update-patient.component.css']
})
export class UpdatePatientComponent implements OnInit {

  id: any;
  patient: any;
  submitted: boolean = false;
  updatePatientForm: FormGroup;
  constructor(private route: ActivatedRoute, private patientService: PatientService, private router: Router, private formBuilder: FormBuilder) {
    this.route.params.subscribe(params => this.id = params.id);
  }

  ngOnInit() {
    this.updatePatientForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', Validators.required],
      gender: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required],
      consultedBy: ['', Validators.required],
      complaints: ['', Validators.required]
    });
    this.getPatient(this.id);
  }

  getPatient(id) {
    this.patientService.getPatient(id).subscribe(data => {
      this.patient = data;
      this.updatePatientForm = this.formBuilder.group({
        firstName: [this.patient.firstName, Validators.required],
        lastName: [this.patient.lastName, Validators.required],
        age: [this.patient.age, Validators.required],
        gender: [this.patient.gender, Validators.required],
        address: [this.patient.address, Validators.required],
        phone: [this.patient.phone, Validators.required],
        consultedBy: [this.patient.consultedBy, Validators.required],
        complaints: [this.patient.complaints, Validators.required]
      });

    })
  }

  updatePatient(): void {
    // TODO: make request to update patient, redirect to patient list on success
    this.patientService.updatePatient(this.id, this.updatePatientForm.value).subscribe(response => {
      this.router.navigate(['/list-patients']);
    })
  }

}
