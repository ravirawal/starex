import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';

export interface PeriodicElement {
  course: string;
  duration: string;
  criteria: string;
  seats: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {course: 'B.Sc. Medical', 
    duration: '4 Years', 
    criteria: '10+2 Pass with PCB with at least 45% Marks',
    seats: 60},
  {course: 'B.Sc. Forensic Science', 
    duration: '4 Years', 
    criteria: '10+2 Pass with Biology, Mathematics with Chemistry as compulsory subject.',
    seats: 60},
    {course: 'M.Sc. Botany', 
     duration: '2 Years', 
    criteria: 'B.Sc Medical (Botany) with at least 45% Marks',
    seats: 30},
    {course: 'M.Sc. Zoology', 
     duration: '2 Years', 
    criteria: 'B.Sc Medical (Zoology) with at least 45% Marks',
    seats: 30},
    {course: 'M.Sc. Microbiology', 
     duration: '2 Years', 
    criteria: 'B.Sc. in Medical, Biotechnology, Microbiology or any other Branch of	Biological Sciences with at least 45% marks',
    seats: 30},
];

@Component({
  selector: 'app-life-science',
  imports: [MatTableModule],
  templateUrl: './life-science.html',
  styleUrl: './life-science.scss'
})
export class lifeScienceComponent {
displayedColumns: string[] = ['course', 'duration', 'criteria', 'seats'];
  dataSource = ELEMENT_DATA;
}