import { Component } from '@angular/core';
import { StarComponent } from "../star/star.component";
import { StarDarkComponent } from "../star-dark/star-dark.component";
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [StarComponent, StarDarkComponent, NgClass, NgFor],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  imagesURL: string[] = [
    './assets/images/poert1.png',
    './assets/images/port2.png',
    './assets/images/port3.png',
    './assets/images/poert1.png',
    './assets/images/port2.png',
    './assets/images/port3.png',
  ];
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
