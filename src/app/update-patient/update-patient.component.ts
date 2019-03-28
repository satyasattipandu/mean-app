import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute } from '@angular/router';
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
      firstName: ['', [Validators.required,Validators.pattern('^[a-zA-Z]{3,24}$')]],
      lastName: ['', [Validators.required,Validators.pattern('^[a-zA-Z]{3,24}$')]],
      age: ['', [Validators.required,Validators.pattern('^[0-9]{1,2}$')]],
      gender:['', Validators.required],
      address:['', Validators.required],
      phone:['', [Validators.required,Validators.pattern('^[0-9]{3}-[0-9]{3}-[0-9]{4}$')]],
      consultedBy:['',  [Validators.required,Validators.pattern('^[a-zA-Z]{1,1000}$')]],
      complaints:['', [Validators.required,Validators.pattern('^[a-zA-Z]{1,1000}$')]]
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
    this.submitted = !this.submitted;
    // TODO: make request to update patient, redirect to patient list on success
    if(this.updatePatientForm.valid){
      this.patientService.updatePatient(this.id, this.updatePatientForm.value).subscribe(response => {
        this.router.navigate(['/list-patients']);
      });
    }
  }

}
