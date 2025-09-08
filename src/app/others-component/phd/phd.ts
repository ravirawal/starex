import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
 import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-phd',
  imports: [MatTabsModule, MatCardModule, MatButtonModule, CommonModule, MatChipsModule],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './phd.html',
  styleUrl: './phd.scss',
  standalone: true
})
export class PhdComponent {
  syllabus = [
  {
    title: 'Research Methodology',
    description: 'Meaning & Objectives of research, Types of research, Scientific method, Internet basics, Qualitative research, Sampling, Questionnaire, Data analysis tools.'
  },
  {
    title: 'Economics',
    description: 'Micro & Macro Economics, Quantitative Analysis, Current economic affairs, General aptitude.'
  },
  {
    title: 'Psychology',
    description: 'Perception, Memory, Learning, Intelligence, Personality, Motivation, Emotion, Research Methods, Biological basis of behaviour.'
  },
  {
    title: 'Mathematics',
    description: 'Real Analysis, Algebra, Linear Algebra, Complex Analysis, Numerical Analysis, Statistics, Differential Equations, Discrete Mathematics, Topology.'
  },
  {
    title: 'Commerce',
    description: 'Business Studies, Accounting, GST, Banking, HRM, Financial & Marketing Management, Business Mathematics, Research Aptitude.'
  },
  {
    title: 'Management',
    description: 'General Management, Strategy, HRM, Marketing, Economics, Quantitative Analysis, Operations Research, Research Methodology.'
  },
  {
    title: 'Microbiology',
    description: 'Microbial history, classification, ecology, growth, metabolism, soil & environmental microbiology, industrial & food microbiology.'
  },
  {
    title: 'Computer Science',
    description: 'Graph Theory, Set Theory, Probability, Digital Logic, Data Structures, Algorithms, OS, Compiler Design, Databases, Networks, Web Technologies.'
  }
];

}