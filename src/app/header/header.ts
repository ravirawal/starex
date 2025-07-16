import { Component, signal, ViewChild } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import {MatExpansionModule} from '@angular/material/expansion';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [MatToolbarModule,
    MatButtonModule,RouterLink,
    MatIconModule, MatMenuModule, MatExpansionModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
   @ViewChild(MatMenuTrigger) menuTrigger!: MatMenuTrigger;
   constructor(private router: Router){

  }
  readonly panelOpenState = signal(false);
  handleDivClick(event: MouseEvent): void {
  event.stopPropagation(); // prevents bubbling that triggers close
  // your custom logic here
}
handleAnchorClick(): void {
    this.menuTrigger.closeMenu(); // Closes menu on anchor click
  }
navigateToHome(){
  this.router.navigateByUrl('/home');
}
}
