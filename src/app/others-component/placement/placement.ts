import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-placement',
  imports: [CommonModule],
  templateUrl: './placement.html',
  styleUrl: './placement.scss',
  standalone: true
})
export class PlacementComponent {
  placementData = [
  {
    "image": "https://www.starexuniversity.com/app-assets/vendors/assets/placement/new_images/35.jpg",
    "alt": "Placement 35"
  },
  {
    "image": "https://www.starexuniversity.com/app-assets/vendors/assets/placement/new_images/37.jpg",
    "alt": "Placement 37"
  },
  {
    "image": "https://www.starexuniversity.com/app-assets/vendors/assets/placement/new_images/36.jpg",
    "alt": "Placement 36"
  },
  {
    "image": "https://www.starexuniversity.com/app-assets/vendors/assets/placement/new_images/34.jpg",
    "alt": "Placement 34"
  },
  {
    "image": "https://www.starexuniversity.com/app-assets/vendors/assets/placement/new_images/30.jpg",
    "alt": "Placement 30"
  },
  {
    "image": "https://www.starexuniversity.com/app-assets/vendors/assets/placement/new_images/31.jpg",
    "alt": "Placement 31"
  },
  {
    "image": "https://www.starexuniversity.com/app-assets/vendors/assets/placement/new_images/32.jpg",
    "alt": "Placement 32"
  },
  {
    "image": "https://www.starexuniversity.com/app-assets/vendors/assets/placement/new_images/33.jpg",
    "alt": "Placement 33"
  },
  {
    "image": "https://www.starexuniversity.com/app-assets/vendors/assets/placement/new_images/6.jpg",
    "alt": "Placement 6"
  }
]

}