import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
})
export class LogInComponent {
  logInForm!: FormGroup;
  loading: boolean = true;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loading = false;
  }

  ngOnInit(): void {
    this.createForm();
  }
  createForm() {
    // setTimeout
    this.logInForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.pattern(/^.{10}$/)]],
    });
  }

  OnSubmit() {
    if (this.logInForm.valid) {
      let formData = new FormData();
      // console.log(this.logInForm);
      console.log(this.logInForm.value);
      formData.append('name', this.logInForm.value.username);
      formData.append('code', this.logInForm.value.specialization);
      this.authService.loginUser(formData).subscribe(
        (result) => {
          this.loading = true;
          alert('تم تسجيل الدخول بنجاح');
          console.log(result);
          this.router.navigateByUrl('/home');
        },
        (error) => {
          this.loading = true;
          alert('فشل تسجيل الدخول');
        }
      );
    }
  }
}

// if(result.code=200 ){}
