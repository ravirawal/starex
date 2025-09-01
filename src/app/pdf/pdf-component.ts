import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { PdfService } from './pdf-component-service';
import * as pdfjsLib from 'pdfjs-dist';
import workerUrl from 'pdfjs-dist/build/pdf.worker?url';
import { GlobalWorkerOptions } from 'pdfjs-dist';
import { MatIconModule } from "@angular/material/icon";

GlobalWorkerOptions.workerSrc = workerUrl;

@Component({
    selector: 'app-pdf-viewer',
    templateUrl: './pdf-component.html',
    styleUrls: ['./pdf-component.scss'],
    imports: [MatIconModule]
})
export class PdfViewerComponent implements OnInit {
    @ViewChild('pdfContainer', { static: true }) containerRef!: ElementRef<HTMLDivElement>;
    pdfUrl: string = '';

    constructor(private pdfService: PdfService) { }

    ngOnInit(): void {
        this.pdfService.pdfUrl$.subscribe(url => {
            if (url) {
                this.pdfUrl = url;
                this.renderAllPages(url);
            }
        });
    }

    async renderAllPages(url: string) {
        const loadingTask = pdfjsLib.getDocument(url);
        const pdf = await loadingTask.promise;
        const container = this.containerRef.nativeElement;
        container.innerHTML = ''; // Clear previous content

        for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
            const page = await pdf.getPage(pageNum);
            const viewport = page.getViewport({ scale: 1 }); // Adjust scale as needed

            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d')!;
            canvas.width = viewport.width;
            canvas.height = viewport.height;

            // Optional: style for responsiveness
            canvas.style.width = '100%';
            canvas.style.height = 'auto';

            await page.render({
                canvasContext: context,
                viewport,
                canvas
            }).promise;

            container.appendChild(canvas); // No wrapper div!


        }
    }

    downloadPdf() {
        const link = document.createElement('a');
        link.href = this.pdfUrl;
        link.download = this.pdfUrl.split('/').pop() || 'document.pdf';
        link.click();
    }

}
