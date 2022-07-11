import { Component, VERSION } from '@angular/core';
import { Router } from '@angular/router';
import { BnNgIdleService } from 'bn-ng-idle';

import { AuthService } from './_services/auth.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Routing Module - Route Guards Demo';

  constructor(
    private authService: AuthService,
    private router: Router,
    private bnIdle: BnNgIdleService
  ) {}

  // initiate it in your component OnInit
  ngOnInit(): void {
    this.bnIdle.startWatching(60).subscribe((isTimedOut: boolean) => {
      if (isTimedOut) {
        console.log('session expired');
        this.logout();
        this.router.navigate(['logout']); 
      }
    });
  }

  logout() {
    this.authService.logoutUser();
    //this.router.navigate(['login']);
  }
}
