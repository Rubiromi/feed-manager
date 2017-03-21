import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { LoginModel } from './login.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loading = false;
  model = new LoginModel('', '');
  error: string;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  login(e: Event): void {
    e.preventDefault();
    this.loading = true;
    this.authService.login(this.model.email, this.model.password).subscribe(
      result => {
        if(result === true) {
          this.router.navigate(['/']);
        }
      },
      error => {
        this.error = 'Invalid username/password';
        this.loading = false;
      },
      () => this.loading = false
    );
  }
}
