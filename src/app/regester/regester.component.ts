import { ApicallService } from './../shared/apicall.service';
import { Component, ElementRef, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-regester',
  templateUrl: './regester.component.html',
  styleUrls: ['./regester.component.scss'],
})
export class RegesterComponent {
  @ViewChild('confirmPassword', { static: false }) confirmPassword:
    | ElementRef
    | undefined;
  genderValues = [
    { name: 'Male', value: 'male' },
    { name: 'Female', value: 'female' },
    { name: 'Others', value: 'others' },
  ];
  UserRegistrationForm: FormGroup;
  constructor(public apicallService: ApicallService, public router: Router) {
    this.UserRegistrationForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.email, Validators.required]),
      gender: new FormControl('', [Validators.required]),
      dob: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }
  onSubmit() {
    if (
      this.UserRegistrationForm.valid &&
      this.UserRegistrationForm.value.password ===
        this.confirmPassword?.nativeElement.value
    ) {
      console.log(
        'User Registration form value is',
        this.UserRegistrationForm.value
      );

      this.apicallService.register(this.UserRegistrationForm.value).subscribe(
        (res: any) => {
          console.log(res);
          if (res && res['status'] === 'ok' && res['data']['_id']) {
            this.router.navigate(['/login']);
          }
        },
        (err) => {
          if (err) {
            console.log('We got error in Signup');
          }
        }
      );
    }
  }
}
