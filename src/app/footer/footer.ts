import { Component } from '@angular/core';
import { MatIconModule } from "@angular/material/icon";
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-footer',
  imports: [ MatIconModule, RouterLink,],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {
  constructor(private router: Router,) {}
openPdfInNewTab(url: string) {
  window.open(url, '_blank');
}
}
