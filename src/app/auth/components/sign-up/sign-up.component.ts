import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  signUpFormValue!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.createForm();
  }
  createForm() {
    this.signUpFormValue = this.formBuilder.group({
      username: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.maxLength(10)]],
      specialization: ['dentistry'],
    });
  }
  OnSubmit() {
    let formData = new FormData();

    // console.log(this.signUpFormValue);
    console.log(this.signUpFormValue.value);
    // var formData: any = new FormData();

    formData.append('name', this.signUpFormValue.value.username);
    formData.append('mobile_phone', this.signUpFormValue.value.phone);
    formData.append(
      'specialization_id',
      this.signUpFormValue.value.specialization
    );
    // const model = {
    //   name: this.signUpFormValue.value.username,
    //   mobile_phone: this.signUpFormValue.value.phone,
    // };
    this.authService.createUser(formData).subscribe((result) => {
      alert('success');
      this.router.navigateByUrl('/login');
    });
  }
}
