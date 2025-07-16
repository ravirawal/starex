import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';

export interface PeriodicElement {
  course: string;
  duration: string;
  criteria: string;
  seats: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {course: 'BHM NEP', 
    duration: '4 Years', 
    criteria: '10+2 with min 45% marks in any stream from a recognized board',
    seats: 60},
  {course: 'Master of Hotel Management &amp; Catering Technology', 
    duration: '2 Years', 
    criteria: "Bachelor's degree in any discipline with 45% Marks.",
    seats: 30},
];
@Component({
  selector: 'app-hotel-management',
  imports: [MatTableModule],
  templateUrl: './hotel-management.html',
  styleUrl: './hotel-management.scss'
})
export class HotelManagementComponent {
displayedColumns: string[] = ['course', 'duration', 'criteria', 'seats'];
  dataSource = ELEMENT_DATA;
}