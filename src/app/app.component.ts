import { Component, VERSION } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './_services/auth.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Routing Module - Route Guards Demo';

  constructor(private authService: AuthService, private router: Router) {}

  logout() {
    this.authService.logoutUser();
    //this.router.navigate(['login']);
  }
}
