import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Feed Manager';

  isLoggedIn(): boolean {
    return localStorage.getItem('token') != null;
  }
}
