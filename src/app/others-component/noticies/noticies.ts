import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-noticies',
  imports: [CommonModule, MatIconModule],
  templateUrl: './noticies.html',
  styleUrl: './noticies.scss',
  standalone: true
})
export class NoticiesComponent {
  documentLinks = [
  {
    title: 'Decision Letter 2025–26',
    url: 'https://www.starexuniversity.com/app-assets/vendors/assets/images/decision letter 25-26.pdf'
  },
  {
    title: 'UGC Letter – Har Ghar Tiranga 2025',
    url: 'https://www.starexuniversity.com/app-assets/vendors/assets/images/UGC Letter - 4045929_Har-ghar-Tiranga-2025.pdf'
  },
  {
    title: 'Annual Report 2022–23',
    url: 'https://www.starexuniversity.com/app-assets/vendors/assets/images/Annual Report 2022-23_Compressed.pdf'
  },
  {
    title: 'Annual Report 2023–24',
    url: 'https://www.starexuniversity.com/app-assets/vendors/assets/images/Annual Report 2023-24_Compressed.pdf'
  }
];

imageNotices = [
  { url: 'https://www.starexuniversity.com/app-assets/vendors/assets/images/Organogram.jpg', alt: 'Organogram' },
  { url: 'https://www.starexuniversity.com/app-assets/vendors/assets/new notice.jpg', alt: 'New Notice' },
  { url: 'https://www.starexuniversity.com/app-assets/vendors/assets/notapr.jpeg', alt: 'August Notification' },
  // ...continue with rest of the images
];

}