import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PdfService } from './pdf-component-service';
import { PdfViewerComponent } from "./pdf-component";

@Component({
  selector: 'app-pdf-modal',
  template: `<app-pdf-viewer></app-pdf-viewer>`,
  imports: [PdfViewerComponent],
})
export class PdfModalComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { url: string },
    private pdfService: PdfService
  ) {}

  ngOnInit(): void {
    console.log('[PDF Modal] Setting URL via service:', this.data.url);
    this.pdfService.setPdfUrl(this.data.url);
  }
}
