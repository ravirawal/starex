import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ScrollRevealDirective } from '../../services/scroll-directive';

@Component({
  selector: 'app-events',
  imports: [CommonModule, MatIconModule, ScrollRevealDirective],
  templateUrl: './events.html',
  styleUrl: './events.scss',
  standalone: true
})
export class EventsComponent {
  eventsData = [
  {
    title: "Happy Teachers Day 2025",
    date: "05-09-2025",
    image: "https://www.starexuniversity.com/uploads/StarexEvents/Teachers_Day_3.jpg"
  },
  {
    title: "Happy Teachers Day 2025",
    date: "05-09-2025",
    image: "https://www.starexuniversity.com/uploads/StarexEvents/Teachers_Day_1_(1).jpg"
  },
  {
    title: "National Flag Day",
    date: "22-07-2025",
    image: "https://www.starexuniversity.com/uploads/StarexEvents/PXL_20250722_072132804.jpg"
  },
  {
    title: "National Flag Day",
    date: "22-07-2025",
    image: "https://www.starexuniversity.com/uploads/StarexEvents/PXL_20250722_071309733.jpg"
  },
  {
    title: "National Flag Day",
    date: "22-07-2025",
    image: "https://www.starexuniversity.com/uploads/StarexEvents/PXL_20250722_062218240_MP.jpg"
  },
  {
    title: "National Flag Day",
    date: "22-07-2025",
    image: "https://www.starexuniversity.com/uploads/StarexEvents/PXL_20250722_051722311_MP.jpg"
  },
  {
    title: "International Yoga Day",
    date: "21-06-2025",
    image: "https://www.starexuniversity.com/uploads/StarexEvents/PXL_20250621_020102747_MP.jpg"
  },
  {
    title: "International Yoga Day",
    date: "21-06-2025",
    image: "https://www.starexuniversity.com/uploads/StarexEvents/PXL_20250621_021121435_MP.jpg"
  },
  {
    title: "International Yoga Day",
    date: "21-06-2025",
    image: "https://www.starexuniversity.com/uploads/StarexEvents/PXL_20250621_020955989_MP.jpg"
  }
];

}