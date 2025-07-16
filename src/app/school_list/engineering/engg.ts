import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';

export interface PeriodicElement {
  course: string;
  duration: string;
  criteria: string;
  seats: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {course: 'B.Tech (AI &amp; ML)', 
    duration: '4 Years', 
    criteria: '10+2 with PCM & min 45%  marks from a recognized board.',
    seats: 60},
  {course: 'B.Tech CSE', 
    duration: '4 Years', 
    criteria: '10+2 with PCM & min 45%  marks from a recognized board.',
    seats: 180},
    {course: 'B.Tech (AI &amp; ML) with academic support of Samatrix', 
     duration: '4 Years', 
    criteria: '10+2 with PCM & min 45%  marks from a recognized board.',
    seats: 180},
    {course: 'B.Tech (Cyber Security &amp; Digital Forensic) with academic support of Samatrix ', 
     duration: '4 Years', 
    criteria: '10+2 with PCM & min 45%  marks from a recognized board.',
    seats: 180},
    {course: 'B.Tech. (AI &amp; ML) with academic support of IBM', 
     duration: '4 Years', 
    criteria: '10+2 with PCM & min 45%  marks from a recognized board.',
    seats: 180},
     {course: 'B.Tech CSE (Azure Data, Cloud &amp; AI Developer) with academic support of Microsoft ', 
     duration: '4 Years', 
    criteria: '10+2 with PCM & min 45%  marks from a recognized board.',
    seats: 180},
     {course: 'B.Tech CSE (Cyber Security) with academic support of Microsoft', 
     duration: '4 Years', 
    criteria: '10+2 with PCM & min 45%  marks from a recognized board.',
    seats: 180},
];

@Component({
  selector: 'app-engineering',
  imports: [MatTableModule],
  templateUrl: './engg.html',
  styleUrl: './engg.scss'
})
export class ENTComponent {
displayedColumns: string[] = ['course', 'duration', 'criteria', 'seats'];
  dataSource = ELEMENT_DATA;
}