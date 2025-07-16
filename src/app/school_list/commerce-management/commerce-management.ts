import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';

export interface PeriodicElement {
  course: string;
  duration: string;
  criteria: string;
  seats: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {course: 'B.Com', 
    duration: '3+1 Years', 
    criteria: '10+2 Pass with at least 45% Marks',
    seats: 60},
  {course: 'M.Com.', 
    duration: '2 Years', 
    criteria: 'B.com(Hons) / Pass/BBA or B.A. with Economics/Marketing/Insurance of 3 years duration with 45% marks.',
    seats: 30},
    {course: 'BBA', 
    duration: '3+1 Years', 
    criteria: '10+2 Pass with at least 45% Marks in any stream from a recognized board',
    seats: 120},
    {course: 'BBA (Business Analytics) With academic support of Samatrix', 
    duration: '3+1 Years', 
    criteria: '10+2 Pass with at least 45% Marks in any stream from a recognized board',
    seats: 120},
    {course: 'BBA (Data Excellence - Analytics &amp; Azure)With academic support of Microsoft', 
    duration: '3+1 Years', 
    criteria: '10+2 Pass with at least 45% Marks in any stream from a recognized board',
    seats: 120},
    {course: 'MBA', 
    duration: '2 Years', 
    criteria: 'Bachelor’s degree in any discipline with minimum 3 years duration with 50% Marks',
    seats: 120},
     {course: 'MBA (Business analytics)<br>With academics support of IBM', 
    duration: '2 Years', 
    criteria: 'Bachelor’s degree in any discipline with minimum 3 years duration with 50% Marks',
    seats: 120},
     {course: 'MBA (Data Pioneers - Azure Ascendancy)<br> With Academic Support of Microsoft', 
    duration: '2 Years', 
    criteria: 'Bachelor’s degree in any discipline with minimum 3 years duration with 50% Marks',
    seats: 120},
];

@Component({
  selector: 'app-commerce-management',
  imports: [MatTableModule],
  templateUrl: './commerce-management.html',
  styleUrl: './commerce-management.scss'
})
export class CommerceManagementComponent {
displayedColumns: string[] = ['course', 'duration', 'criteria', 'seats'];
  dataSource = ELEMENT_DATA;
}
