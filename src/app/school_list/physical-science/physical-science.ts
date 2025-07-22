import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';

export interface PeriodicElement {
  course: string;
  duration: string;
  criteria: string;
  seats: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {course: 'B.Sc. (Non-Medical)', 
    duration: '4 Years', 
    criteria: '10+2 Pass with PCM with at least 45% marks',
    seats: 60},
  {course: 'M.Sc. Physics', 
    duration: '2 Years', 
    criteria: 'B.Sc with Physics as a compulsory subject with 50% aggregate marks',
    seats: 30},
    {course: 'M.Sc. Chemistry', 
    duration: '2 Years', 
    criteria: 'B.Sc with Chemistry as a compulsory subject with 50% aggregate marks',
    seats: 30},
    {course: 'M.Sc. Mathematics ', 
    duration: '2 Years', 
    criteria: 'B.Sc with Mathematics as a compulsory subject with 50% aggregate marks',
    seats: 30},
];

@Component({
  selector: 'app-physical-science',
  imports: [MatTabsModule, MatTableModule],
  templateUrl: './physical-science.html',
  styleUrl: './physical-science.scss'
})
export class PhysicalScienceComponent {
displayedColumns: string[] = ['course', 'duration', 'criteria', 'seats'];
  dataSource = ELEMENT_DATA;
}
