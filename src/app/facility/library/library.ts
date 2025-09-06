import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-library',
  imports: [MatCardModule],
  templateUrl: './library.html',
  styleUrl: './library.scss',
  standalone: true
})
export class LibraryComponent {}