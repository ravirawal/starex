import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, ViewChild } from '@angular/core';
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
import { FacultyService } from '../services/facultyService';
import { MatDialog } from '@angular/material/dialog';
import { PdfModalComponent } from '../pdf/pdf-modal-components';
@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, MatListModule, CommonModule,MatCardModule,MatTabsModule,
    MatButtonModule,RouterLink,
    MatIconModule, MatMenuModule, MatExpansionModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
   @ViewChild(MatMenuTrigger) menuTrigger!: MatMenuTrigger;
   screenWidth = signal(window.innerWidth);
   constructor(private router: Router, private facultyService: FacultyService,private dialog: MatDialog){
window.addEventListener('resize', () => {
      this.screenWidth.set(window.innerWidth);
    });
  }
  isMenuOpen = false;
  isMobile(): boolean {
    return this.screenWidth() < 800;
  }
 aboutStarexSections = [
  {
    title: 'About Starex',
    expanded: false,
    links: [
      { label: 'About Us', path: 'about-starex', type: 'router' },
      { label: "Chancellor's Message", path: 'chancellor-message', type: 'router' },
      { label: "Vice Chancellor's Message", path: 'vice-chancellor-message', type: 'router' },
      { label: 'Registrar Message', path: 'registrar-message', type: 'router' },
      { label: 'OSD Message', path: 'osd-message', type: 'router' },
      { label: 'COE', path: 'coe', type: 'router' },
      { label: 'Recognition & Approval', path: 'approval-recognition', type: 'router' },
      { label: 'Mandatory Disclosure', path: 'disclosure', type: 'router' },
      { label: "Starex MOU's", path: 'starex-mou', type: 'router' },
      { label: 'Information for UGC Inspection', path: 'assets/pdf/information_for_ugc_inspection.pdf', type: 'pdf' },
      { label: 'Annual Reports', path: 'annual-reports', type: 'router' },
      { label: 'Ombudsperson', path: 'assets/pdf/2025_about_ombudsperson.pdf', type: 'pdf' },
      { label: 'Policies', path: 'policies', type: 'router' },
      { label: 'Organogram', path: 'organogram', type: 'router' },
    ]
  }
];

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
goToFaculty(department: string) {
  this.menuTrigger.closeMenu();
  this.facultyService.setSearchTerm({ department });
  this.router.navigate(['/faculty']);
}
  previewPdf(url: string) {
    this.dialog.open(PdfModalComponent, {
    width: '90vw',
    maxWidth: '100vw',
    data: { url }
  });
    this.menuTrigger.closeMenu();
  }
  openPdfInNewTab(url: string) {
  window.open(url, '_blank');
}
}
