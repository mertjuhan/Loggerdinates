import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  NgForm,
  ReactiveFormsModule,
  Validators
} from "@angular/forms";
import {passwordValidator} from "../../../Validators/PasswordValidator";
import {ErrorStateMatcher} from "@angular/material/core";
import {MatButtonModule} from "@angular/material/button";

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}
@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, MatButtonModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent {
  createForm : FormGroup = this.fb.group({
    username :['',Validators.required],
    email : ['',[Validators.required,Validators.email]],
    password : ['', [Validators.required,passwordValidator(),Validators.minLength(8)]]
  })
  matcher = new MyErrorStateMatcher();
  constructor(private fb : FormBuilder) {
  }
}
