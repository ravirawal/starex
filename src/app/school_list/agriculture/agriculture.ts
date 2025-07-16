import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';

export interface PeriodicElement {
  course: string;
  duration: string;
  criteria: string;
  seats: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {course: 'B.Sc. (Hons.) Agriculture Science', 
    duration: '4 Years', 
    criteria: '10+2 or equivalent pass with Physics,Chemistry, Biology/ Mathematics/ Agriculture with atleast 45% marks.',
    seats: 60},
  {course: 'M.Sc. Soil Science', 
    duration: '2 Years', 
    criteria: 'Bachelor’s degree in any Agriculture with at least 50% marks',
    seats: 30},
    {course: 'MSc in Entomology', 
    duration: '2 Years', 
    criteria: 'Bachelor’s degree in any Agriculture with at least 50% marks',
    seats: 30},
];

@Component({
  selector: 'app-agriculture',
  imports: [MatTableModule],
  templateUrl: './agriculture.html',
  styleUrl: './agriculture.scss',
  standalone: true
})
export class AgricultureComponent {
displayedColumns: string[] = ['course', 'duration', 'criteria', 'seats'];
  dataSource = ELEMENT_DATA;
}