import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ScrollRevealDirective } from '../../services/scroll-directive';

@Component({
  selector: 'app-news',
  imports: [MatIconModule, CommonModule, ScrollRevealDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './news.html',
  styleUrl: './news.scss',
  standalone: true
})
export class NewsComponent {
  newsData = [
    {
    title: "School of Agriculture Science ",
    date: "11-01-2024",
    image: "https://www.starexuniversity.com/uploads/StarexNews/jan13.png",
    description: "Agriculture Science practical work on research field (Dr. Yaduram, Dr. Versha &amp; Dr Sarware )"
  },
  {
    title: "Bharatiya Bhasha Diwas",
    date: "03-01-2024",
    image: "https://www.starexuniversity.com/uploads/StarexNews/Bharatiya_Bhasha_Diwas.png",
    description: "Bharatiya Bhasha Diwas"
  },
  {
    title: "Natural farming",
    date: "03-01-2024",
    image: "https://www.starexuniversity.com/uploads/StarexNews/visitagri.png",
    description: "Natural farming,  Field research/Progressive farmer"
  },
  {
    title: "Connecting Communities Through Science",
    date: "17-02-2024",
    image: "https://www.starexuniversity.com/uploads/StarexNews/nsd.png",
    description: "National Science Day Seminar featuring Dr. Akhilesh Pandey, inspiring collaboration and innovation."
  },
  {
    title: "Recreational Visit to Surajkund International Craft Fair",
    date: "17-02-2024",
    image: "https://www.starexuniversity.com/uploads/StarexNews/dsd.png",
    description: "Students immersed themselves in vibrant global crafts and cultural exhibits."
  },
  {
    title: "Visit to Mark Exhaust System Pvt Ltd",
    date: "07-02-2024",
    image: "https://www.starexuniversity.com/uploads/StarexNews/WhatsApp_Image_2024-02-08_at_5_40_40_PM.png",
    description: "MSc Physics students explored engineering excellence at Mark Exhaust System Pvt Ltd, Manesar. #PhysicsInAction #EngineeringExploration #StarexUniversity"
  }
];

}