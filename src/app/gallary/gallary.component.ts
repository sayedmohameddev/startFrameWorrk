import { Component } from '@angular/core';
import { StarDarkComponent } from "../star-dark/star-dark.component";
import { NgClass, NgFor } from '@angular/common';
import { RecommendedProductsComponent } from '../recommended-products/recommended-products.component';

@Component({
  selector: 'app-gallary',
  standalone: true,
  imports: [StarDarkComponent,NgClass,NgFor,RecommendedProductsComponent],
  templateUrl: './gallary.component.html',
  styleUrl: './gallary.component.css'
})
export class GallaryComponent {
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
