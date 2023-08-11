import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class SignUpComponent {
  form!: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      userName: this.formBuilder.control('', [Validators.required]),
      phoneNumber:this.formBuilder.control ('', [Validators.required]),
      majors:this.formBuilder.control('dentistry',),
    });
  }

  submitForm() {
    // Handle form submission here
    console.log(this.form.value);
  }

}
