import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedServiceService } from 'src/app/shared/services/shared-service.service';

@Component({
  selector: 'app-before-register',
  templateUrl: './before-register.component.html',
  styleUrls: ['./before-register.component.css'],
})
export class BeforeRegisterComponent implements OnInit {
  specialization!: any[];
  title: any[] = [];
  loading: boolean = false;

  // allSpecialization?: any[];
  collages?: any;
  constructor(
    private router: Router,
    private sharedService: SharedServiceService
  ) {}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.getAllSpecialization();
    this.loading = true;
  }

  // Get All Specialization Method
  // getAllSpecialization() {
  //   this.sharedService.getSpecialization().subscribe(
  //     (result: any) => {
  //       console.log(result);
  //       console.log(result.status);
  //       this.specialization = result.data;
  //       console.log(this.specialization);

  //       //  this.title = [
  //       //   {text: this.specialization.specialization_name, cols: 3, rows: 1},
  //       //   {text: this.specialization.specialization_name, cols: 3, rows: 1},
  //       //   {text: this.specialization.specialization_name, cols: 3, rows: 1},
  //       //   {text: this.specialization.specialization_name, cols: 3, rows: 1},
  //       //   {text: this.specialization.specialization_name, cols: 3, rows: 1},
  //       //   {text: this.specialization.specialization_name, cols: 3, rows: 1},
  //         // {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
  //         // {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
  //         // {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  //       // ];

  //     },
  //     (error) => {
  //       console.log('Error retrieving specialization:', error);
  //     }
  //   );
  // }

  // Get All Specialization Method
  getAllSpecialization() {
    // this.loading = true;

    this.sharedService.getSpecialization().subscribe(
      (result: any) => {
        this.loading = false;

        // console.log(result);
        // console.log(result.status);
        // console.log(result.data.colleges);
        this.specialization = result.data.colleges;
        this.specialization?.forEach((ele) => {
          // console.log(ele.name);
          let collage = ele.name;
          return collage;
        });
        // console.log(this.collages );
        // console.log(this.allSpecialization);
        // console.log(this.allSpecialization[0]);
      },
      (error) => {
        this.loading = false;

        console.log('Error retrieving specialization:', error);
      }
    );
  }
}
