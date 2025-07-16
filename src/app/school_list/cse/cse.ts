import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';

export interface PeriodicElement {
  course: string;
  duration: string;
  criteria: string;
  seats: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {course: 'BCA (AI &amp; ML) with academic support of Samatrix ', 
    duration: '4 Years', 
    criteria: '10+2 with PCM &amp; min 45% marks from a recognized board.',
    seats: 180},
  {course: 'BCA', 
    duration: '3 Years', 
    criteria: '10+2 Pass with at least 45% Marks',
    seats: 120},
    {course: 'BCA with Microsoft Specialisation in Python and Azure for Data Cloud Integration', 
     duration: '3 Years', 
    criteria: '10+2 Pass with at least 45% Marks',
    seats: 120},
    {course: 'MCA', 
     duration: '2 Years', 
    criteria: 'BCA/B.Sc (IT/Comp.sc / B.Tech) with atleast 45% marks',
    seats: 30},
    {course: 'MCA with Microsoft specialisation in Python and Azure for Data Cloud Integration', 
     duration: '2 Years', 
    criteria: 'BCA/B.Sc (IT/Comp.sc / B.Tech) with atleast 45% marks',
    seats: 30},
];

@Component({
  selector: 'app-cse',
  imports: [MatTableModule],
  templateUrl: './cse.html',
  styleUrl: './cse.scss'
})
export class CSEComponent {
displayedColumns: string[] = ['course', 'duration', 'criteria', 'seats'];
  dataSource = ELEMENT_DATA;
}