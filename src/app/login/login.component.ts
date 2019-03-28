import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from './../services/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  data: any;
  userDetails: any;
  loginForm: FormGroup;
  submitted: boolean = false;
  isAuthenticated: boolean = false;
  errorMessage: string = '';
  constructor(private loginService: LoginService,
    private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  signin() {
    this.submitted = true;
    this.loginForm.value.views = 0;
    this.userDetails = this.loginForm.value;
    if (this.loginForm.valid) {
      this.loginService.signIn(this.userDetails).subscribe(response => {
        this.isAuthenticated = true;
        this.loginService.setAuthentication(this.isAuthenticated);
        this.data = response;
        localStorage.setItem("userInfo", JSON.stringify(this.data.userDetails));
        this.router.navigate(['/list-patients']);
      },
        (error) => {
          this.isAuthenticated = false;
          this.errorMessage = error['error'].message;
        });
    }
  }

}
