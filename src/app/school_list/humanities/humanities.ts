import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';

export interface PeriodicElement {
  course: string;
  duration: string;
  criteria: string;
  seats: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {course: 'B.A.', 
    duration: '4 Years', 
    criteria: '10+2 pass with at least 45% marks',
    seats: 60},
  {course: 'B.A. English', 
    duration: '4 Years', 
    criteria: '10+2 Pass with at least 45% Marks',
    seats: 60},
    {course: 'B.A. Political Science', 
     duration: '4 Years', 
    criteria: '10+2 Pass with at least 45% Marks',
    seats: 60},
    {course: 'M.A. (English)', 
     duration: '2 Years', 
    criteria: "Bachelor's degree with 45% marks",
    seats: 40},
    {course: 'M.A. (Political Science)', 
    duration: '2 Years', 
    criteria: "Bachelor's degree with 45% marks",
    seats: 40},
    {course: 'M.A. (Psychology)', 
    duration: '2 Years', 
    criteria: "Bachelor's degree with 45% marks",
    seats: 40},
];

@Component({
  selector: 'app-humanities',
  imports: [MatTableModule],
  templateUrl: './humanities.html',
  styleUrl: './humanities.scss'
})
export class HumanitiesComponent {
displayedColumns: string[] = ['course', 'duration', 'criteria', 'seats'];
  dataSource = ELEMENT_DATA;
}