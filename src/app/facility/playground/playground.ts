import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-playground',
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './playground.html',
  styleUrl: './playground.scss',
  standalone: true
})
export class PlaygroundComponent {}