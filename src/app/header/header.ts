import { Component, signal, ViewChild } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import {MatExpansionModule} from '@angular/material/expansion';
import {RouterLink} from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';

@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, MatListModule, CommonModule,MatCardModule,MatTabsModule,
    MatButtonModule,RouterLink,
    MatIconModule, MatMenuModule, MatExpansionModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
   @ViewChild(MatMenuTrigger) menuTrigger!: MatMenuTrigger;
   screenWidth = signal(window.innerWidth);
   constructor(private router: Router){
window.addEventListener('resize', () => {
      this.screenWidth.set(window.innerWidth);
    });
  }
  isMobile(): boolean {
    return this.screenWidth() < 768;
  }
  navItems = [
    {
      label: 'Dashboard',
      children: [
        { label: 'Overview', route: '/dashboard/overview' },
        { label: 'Stats', route: '/dashboard/stats' },
      ],
    },
    {
      label: 'Settings',
      children: [
        { label: 'Profile', route: '/settings/profile' },
        { label: 'Security', route: '/settings/security' },
      ],
    },
  ]
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
