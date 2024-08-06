import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { StarDarkComponent } from "../star-dark/star-dark.component";

@Component({
  selector: 'app-recommended-products',
  standalone: true,
  imports: [NgClass, NgFor, StarDarkComponent],
  templateUrl: './recommended-products.component.html',
  styleUrl: './recommended-products.component.css'
})
export class RecommendedProductsComponent {
  imagesURL : string[] = [
    './assets/images/poert1.png',
    './assets/images/port2.png',
    './assets/images/port3.png',
    './assets/images/poert1.png',
    './assets/images/port2.png',
    './assets/images/port3.png',
    './assets/images/poert1.png',
    './assets/images/port2.png',
    './assets/images/port3.png',
    './assets/images/poert1.png',
    './assets/images/port2.png',
    './assets/images/port3.png',
  ];
  ;
  flag: boolean = true;
  currentImage: number = 0;
  closeLightBox(e: Event): void {
    e.stopPropagation();
    this.flag = true;
  }
  openLightBox(): void {
    this.flag = false;
  }
  currentImageIndex(currentIndex: number): void {
    this.currentImage = currentIndex;
  }
  imgLightBox(e: Event): void {
    e.stopPropagation();
  }
}
