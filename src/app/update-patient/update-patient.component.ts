import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { PatientService } from '../services/patient.service';

@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrls: ['./update-patient.component.css']
})
export class UpdatePatientComponent implements OnInit {

  id: any;
  patient: {};
  firstName: '';
  lastName: '';
  age: '';
  gender: '';
  address: '';
  phone: '';
  consultedBy: '';
  complains: '';
  prescriptions: '';
  results: '';

  constructor(private route: ActivatedRoute, private patientService: PatientService, private router: Router) { 
    this.route.params.subscribe(params => this.id = params);
  }

  ngOnInit() {
    this.getPatient(this.id);
  }

  getPatient(id) {
   /* this.patientService.getPatient(id).subscribe((data:{}) => {
/*      console.log(data.patient);
      this.firstName = data.patient.firstName;
      this.lastName = data.patient.lastName;
      this.age = data.patient.age;
      this.gender = data.patient.gender;
      this.address = data.patient.address;
      this.phone = data.patient.phone;
      this.consultedBy = data.patient.consultedBy;
      this.complains = data.patient.complains;
   })*/
  }

  /*updatePatient(): void {
    let patient = {
      firstName: this.firstName,
      lastName:  this.lastName,
      age: this.age,
      gender: this.gender,
      address: this.address,
      phone: this.phone,
      consultedBy: this.consultedBy,
      complains: this.complains,
      results: this.results,
      prescriptions: this.prescriptions
    }
    // TODO: make request to update patient, redirect to patient list on success
  }
*/
}
