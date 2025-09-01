import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PdfService {
  private pdfUrlSubject = new BehaviorSubject<string | null>(null);
  pdfUrl$ = this.pdfUrlSubject.asObservable();

  setPdfUrl(url: string) {
    this.pdfUrlSubject.next(url);
  }
}
