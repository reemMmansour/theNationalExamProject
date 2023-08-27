import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Route, Router } from '@angular/router';
import { Users } from 'src/app/model/Users';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  signUpForm!: FormGroup;
  users?: any;
  loading: boolean = false;

  allSpecialization?: any[];
  collages?: any;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loading = true;
    this.createForm();
    // this.getStudents();
    this.getAllSpecialization();
    // this.createFormvalue();
  }
  createForm() {
    this.signUpForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      phone: [
        '',
        [
          Validators.pattern(/^09\d{8}$/),
          Validators.required,
          Validators.maxLength(10),
        ],
      ],
      specialization: [''],
    });
  }
  // createFormvalue() {
  //   console.log(this.signUpForm.value);
  //  }

  // Get All Specialization Method
  getAllSpecialization() {
    this.authService.getSpecialization().subscribe(
      (result: any) => {
        this.loading = false;

        // console.log(result);
        // console.log(result.status);
        // console.log(result.data.colleges);
        this.allSpecialization = result.data.colleges;
        this.allSpecialization?.forEach((ele) => {
          console.log(ele.name);
          let collage = ele.name;
          return collage;
        });
        console.log(this.collages);
        // console.log(this.allSpecialization);
        // console.log(this.allSpecialization[0]);
      },
      (error) => {
        this.loading = false;

        console.log('Error retrieving specialization:', error);
      }
    );
  }

  // OnSubmit Method
  OnSubmit() {
    let formData = new FormData();
    // console.log(this.signUpFormValue);
    console.log(this.signUpForm.value);
    formData.append('name', this.signUpForm.value.username);
    // formData.append('mobile_phone', this.signUpForm.value.phone);
    formData.append('phone', this.signUpForm.value.phone);
    // formData.append('specialization_id', this.signUpForm.value.specialization);
    formData.append('college_id', this.signUpForm.value.specialization);
    this.authService.createUser(formData).subscribe(
      (result) => {
        this.loading = false;

        // if(result.code=200 ){}
        alert('success');
        // console.log(result);
        this.router.navigateByUrl('/login');
      },
      (error) => {
        this.loading = false;

        alert('something Error');
      }
    );
  }
}

//*************************

// getErrorMessage() {
//   if (this.phone.hasError('required')) {
//     return 'You must enter a value';
//   }

//   return this.phone.hasError('email') ? 'Not a valid email' : '';
// }
