import { ApicallService } from './../shared/apicall.service';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  UserLoginForm: FormGroup;
  userData: any;
  errorLogin = false;
  constructor(public apicallService: ApicallService, public router: Router) {
    this.UserLoginForm = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    if (this.UserLoginForm.valid) {
      console.log(this.UserLoginForm.valid);
      this.apicallService.login(this.UserLoginForm.value).subscribe(
        (res: any) => {
          console.log(res);
          if (
            res &&
            res['status'] === 'ok' &&
            res['data']['authToken'] &&
            res['data']['response']
          ) {
            localStorage.setItem('token', res['data']['authToken']);
            this.router.navigate(['/dashboard']);
          } else if (res && res['status'] !== 'ok') {
            this.errorLogin = true;
          }
        },
        (err) => {
          if (err) {
            console.log('We got error in login');
            this.errorLogin = true;
          }
        }
      );
    }

    console.log(this.UserLoginForm.value);
  }
}
