import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from '../../services/shared-service.service';

// Slides
// interface Slider {
//   id: number;
//   image_url: string;
//   link: string;
// }

@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.css'],
})
export class ImageCarouselComponent implements OnInit {
  constructor(private sharedService: SharedServiceService) {}
  ngOnInit(): void {
    this.getSlider();
  }
  // sliders?: [];
  allSlides!: any[];
  // imageUrl?: string;

  activeSlide = 0;

  showSlide(index: number) {
    this.activeSlide = index;
  }

  getSlider() {
    this.sharedService.getSlider().subscribe((result: any) => {
      // console.log(result);
      // console.log(result.data);
      console.log(result.data.sliders);
      this.allSlides = result.data.sliders;
      this.allSlides?.forEach((element) => {
        console.log(element);
        // console.log(element.id);
        console.log(element.image_url);
        let sliders = element;
        // this.sliders.image_url = element.image_url;
        // console.log(this.sliders);
        return sliders;
      });
    });
  }
}

// sliders?: [];
// allSlides!: any[];
// imageUrl?: string;

// = [
// {
//   url: '../../../../../assets/icons/ad-section.svg',
//   caption: 'Caption Text One'
// },
// {
//   url: '../../../../../assets/images/image 1.svg',
//   caption: 'Caption Text Two'
// },
// {
//   url: '../../../../../assets/icons/ad-section.svg',
//   caption: 'Caption Text Three'
// }
// ];
