import { Component, OnInit} from '@angular/core';

// Slides
interface Slide {
  url: string;
  caption: string;
}


@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.css'],
})
export class ImageCarouselComponent implements OnInit {
  ngOnInit(): void {

  }
  slides: Slide[] = [
    {
      url: '../../../../../assets/icons/ad-section.svg',
      caption: 'Caption Text One'
    },
    {
      url: '../../../../../assets/images/image 1.svg',
      caption: 'Caption Text Two'
    },
    {
      url: '../../../../../assets/icons/ad-section.svg',
      caption: 'Caption Text Three'
    },
    {
      url: '../../../../../assets/icons/ad-section.svg',
      caption: 'Caption Text Three'
    }
  ];

  activeSlide = 0;

  showSlide(index: number) {
    this.activeSlide = index;
  }
}
