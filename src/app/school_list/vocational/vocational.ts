import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';

export interface PeriodicElement {
  course: string;
  duration: string;
  seats: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {course: 'Diploma', 
    duration: '1 Years',
    seats: 5},
  {course: 'Advanced Diploma', 
    duration: '2 Years',
    seats: 6},
    {course: 'B. Voc. Degree', 
     duration: '3 Years',
    seats: 7},
    {course: 'PG Diploma', 
     duration: '1 Years',
    seats: 8},
];

@Component({
  selector: 'app-vocational',
  imports: [MatTableModule],
  templateUrl: './vocational.html',
  styleUrl: './vocational.scss'
})
export class VocationalComponent {
displayedColumns: string[] = ['course', 'duration','seats'];
  dataSource = ELEMENT_DATA;
}