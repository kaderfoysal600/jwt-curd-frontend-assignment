import { Component } from '@angular/core';
import { ApicallService } from '../shared/apicall.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss'],
})
export class UserlistComponent {
  constructor(public apicallService: ApicallService, public router: Router) {}
  ngOnInit(): void {
    if (localStorage.getItem('token')) {
      this.apicallService
        .gotoDashBoard(localStorage.getItem('token'))
        .subscribe(
          (res: any) => {
            if (res && res['status'] === 'ok') {
              console.log('We are in dashboard');
            } else {
              console.log('Something went wrong in dashboard');
            }
          },
          (err) => {
            if (err) {
              console.log('Err in Dashboard');
            }
          }
        );
    }
  }

  OnLogOut() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
