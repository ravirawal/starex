import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';

export interface PeriodicElement {
  course: string;
  duration: string;
  criteria: string;
  seats: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {course: 'B.A. LL.B (Hons.) With Judicial Study', 
    duration: '5 Years', 
    criteria: '10+2 pass with at least 45% marks, Age limit 20 years for General category &amp; 22'
								+'Years for SC/ST &amp; OBC as of 1st August of the year in which admission is sought, Age'
								+'relaxation for SC/ST ',
    seats: 120},
  {course: 'BBA LL.B <br>(Hons. ) With Judicial Study<br>', 
    duration: '5 Years', 
    criteria: '10+2 pass with at least 45% marks, Age limit 20 years for General category &amp; 22'
								+'Years for SC/ST &amp; OBC as of 1st August of the year in which admission is sought, Age'
								+'relaxation for SC/ST ',
    seats: 60},
    {course: 'LL.B With Judicial Study', 
     duration: '3 Years', 
    criteria: 'Have Passed Graduation (10+2+3 pattern) in any discipline from a recognised'
								+'College/University, having secured minimum 45% marks in aggregate for the general'
								+'category and 40% marks in aggregate for SC/ST category',
    seats: 60},
    {course: 'LL.M With Judicial Study', 
     duration: '2 Years', 
    criteria: 'LL.B pass with 50% Marks from a recognized college/university',
    seats: 30},
];

@Component({
  selector: 'app-law',
  imports: [MatTableModule],
  templateUrl: './law.html',
  styleUrl: './law.scss'
})
export class LawComponent {
displayedColumns: string[] = ['course', 'duration', 'criteria', 'seats'];
  dataSource = ELEMENT_DATA;
}
