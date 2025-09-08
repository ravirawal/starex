import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-press-coverage',
  imports: [CommonModule, MatIconModule],
  templateUrl: './press-coverage.html',
  styleUrl: './press-coverage.scss',
  standalone: true
})
export class PressCoverageComponent {
  pressMediaData = [
  {
    title: "News",
    date: "05-06-2023",
    image: "https://www.starexuniversity.com/uploads/StarexPressMedia/image_(1).png"
  },
  {
    title: "",
    date: "",
    image: "https://www.starexuniversity.com/uploads/StarexPressMedia/studentimage.jpg"
  },
  {
    title: "News",
    date: "12-10-2021",
    image: "https://www.starexuniversity.com/uploads/StarexPressMedia/owqeqwe.JPG"
  },
  {
    title: "News",
    date: "12-10-2021",
    image: "https://www.starexuniversity.com/uploads/StarexPressMedia/asdwe.JPG"
  },
  {
    title: "News",
    date: "07-10-2021",
    image: "https://www.starexuniversity.com/uploads/StarexPressMedia/notice2.jpg"
  },
  {
    title: "News",
    date: "07-10-2021",
    image: "https://www.starexuniversity.com/uploads/StarexPressMedia/notice1.jpg"
  }
];

}