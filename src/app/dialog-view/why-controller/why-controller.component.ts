import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialog,
} from '@angular/material/dialog';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Why } from 'src/app/interface/why.interface';

@Component({
  selector: 'app-why-controller',
  templateUrl: './why-controller.component.html',
  styleUrls: ['./why-controller.component.scss'],
})
export class WhyControllerComponent implements OnInit {
  // @ViewChild('formElement') formElement: NgForm;
  // dataForm?: FormGroup;

  // why: any;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<WhyControllerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    // Init Data Form
    // this.initDataForm();
    // if (this.data) {
    //   this.why = this.data;
    //   this.setFormValue();
    // }
  }

  /**
   * INIT FORM & Submit
   * initDataForm()
   * setFormValue()
   * onSubmit()
   */
  // private initDataForm() {
  //   this.dataForm = this.fb.group({
  //     title: [null, Validators.required],
  //     subTitle: [null],
  //     description: [null],
  //   });
  // }

  // private setFormValue() {
  //   this.dataForm.patchValue(this.why);
  // }

  // onSubmit() {
  //   if (this.dataForm.invalid) {
  //     return;
  //   }
  //   this.dialogRef.close({
  //     data: this.dataForm.value,
  //   });
  // }

  /**
   * ON CLOSE DIALOG
   */
  // onClose() {
  //   this.dialogRef.close();
  // }
}
