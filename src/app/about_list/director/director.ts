import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-director',
  imports: [RouterLink],
  templateUrl: './director.html',
  styleUrl: './director.scss',
  standalone: true
})
export class DirectorComponent {
  constructor(public router: Router,){}
}
