import { Component } from '@angular/core';
import {MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-policies',
  imports: [MatIconModule, MatExpansionModule, MatCardModule],
  templateUrl: './policies.html',
  styleUrl: './policies.scss',
  standalone: true
})
export class PoliciesComponent {}