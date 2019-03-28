import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './../services/login.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isAuthenticated: boolean;
  isUserExist: any;
  constructor( private router: Router,
    private loginService:LoginService) { }

  ngOnInit() {
    if (localStorage.getItem("userInfo")) {
      this.isUserExist = JSON.parse(localStorage.getItem("userInfo"));
    }
  }
  
  logout(){
    this.isAuthenticated = false;
    this.loginService.setAuthentication(this.isAuthenticated);
    this.router.navigate(['/login']);
  }

}
