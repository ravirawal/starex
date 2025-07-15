import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { FlexLayoutModule } from 'ngx-flexible-layout';
import {MatTableModule} from '@angular/material/table';

export interface PeriodicElement {
  course: string;
  duration: string;
  criteria: string;
  seats: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {course: 'Bachelor in Pharmacy', 
    duration: '4 Years', 
    criteria: '10+2 Pass with Physics and Chemistry as compulsory subject along with one other subject Biology or Math having at least 45% marks',
    seats: 100},
  {course: 'Diploma in Pharmacy', 
    duration: '2 Years', 
    criteria: '10+2 Pass with Physics and Chemistry as compulsory subjects along with one other subject Biology or Math having at least 50% Marks',
    seats: 120},
    {course: 'Masters of Pharmacy in Pharmaceutics', 
    duration: '2 Years', 
    criteria: 'Bachelors degree in a relevant subject with at least 45% marks',
    seats: 9},
    {course: 'Masters of Pharmacy in Pharmaceutical Chemistry', 
    duration: '2 Years', 
    criteria: 'Bachelors degree in a relevant subject with at least 45% marks',
    seats: 9},
];

@Component({
  selector: 'app-pharmacy',
  imports: [MatTabsModule, FlexLayoutModule, MatTableModule],
  templateUrl: './pharmacy.html',
  styleUrl: './pharmacy.scss'
})
export class PharmacyComponent {
  displayedColumns: string[] = ['course', 'duration', 'criteria', 'seats'];
  dataSource = ELEMENT_DATA;

}
