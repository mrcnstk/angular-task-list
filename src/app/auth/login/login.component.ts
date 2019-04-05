import { AuthService } from './../auth.service';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) {}
  login(formData: NgForm) {
    this.authService.login(formData.value.email, formData.value.password);
  }

  signup(formData: NgForm) {
    this.authService.signup(formData.value.email, formData.value.password);
  }
}
