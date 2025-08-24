
import { Component } from '@angular/core';
import { ChatbotModal } from "../chatbot-modal/chatbot-modal";
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chatbot',
  imports: [ChatbotModal, CommonModule],
  templateUrl: './chatbot.html',
  styleUrl: './chatbot.scss',
  standalone: true
})
export class Chatbot {
  isChatOpen = false;
  isClosing = false;
  suggestion: string | null = null;

  constructor(private router: Router) {}

  openChat() {
    this.isChatOpen = true;
    this.isClosing = false;
  }

  closeChat() {
    this.isClosing = true;
    setTimeout(() => {
      this.isChatOpen = false;
      this.isClosing = false;
    }, 400); // Match the modal's slide-out duration
  }

  // List of valid keywords for dynamic suggestions
  private validKeywords: string[] = [
    'madhu','mohinder',
    'chancellor', 'pharmacy', 'agriculture', 'humanities', 'registrar', 'vc', 'engineering', 'physical', 'vocational',
    'disclosure', 'mou', 'policies', 'recognition', 'annual report', 'ombudsperson', 'law', 'home', 'commerce', 'management',
    'computer', 'cse', 'technology', 'hotel', 'life science', 'pharmaceutical', 'about', 'osd', 'coe', 'ugc'
  ];

  // Levenshtein distance function
  private levenshtein(a: string, b: string): number {
    const an = a.length;
    const bn = b.length;
    if (an === 0) return bn;
    if (bn === 0) return an;
    const matrix = [];
    for (let i = 0; i <= bn; ++i) matrix[i] = [i];
    for (let j = 0; j <= an; ++j) matrix[0][j] = j;
    for (let i = 1; i <= bn; ++i) {
      for (let j = 1; j <= an; ++j) {
        if (b.charAt(i - 1) === a.charAt(j - 1)) {
          matrix[i][j] = matrix[i - 1][j - 1];
        } else {
          matrix[i][j] = Math.min(
            matrix[i - 1][j - 1] + 1,
            matrix[i][j - 1] + 1,
            matrix[i - 1][j] + 1
          );
        }
      }
    }
    return matrix[bn][an];
  }

  onUserMessage(message: string) {
    const msg = message.toLowerCase();
    const words = msg.split(/\s+/);
    // If any word is an exact match to a keyword, route immediately and do not show suggestions
    for (const word of words) {
      if (this.validKeywords.includes(word)) {
        // Routing logic (same as before)
        if (word === 'home') {
          this.router.navigate(['/home']);
        } else if (word === 'agriculture') {
          this.router.navigate(['/agriculture']);
        } else if (word === 'commerce' || word === 'management') {
          this.router.navigate(['/commerce&management']);
        } else if (word === 'computer' || word === 'cse' || word === 'technology') {
          this.router.navigate(['/computerscience&technology']);
        } else if (word === 'engineering') {
          this.router.navigate(['/engineering&technology']);
        } else if (word === 'hotel') {
          this.router.navigate(['/hotel-management']);
        } else if (word === 'humanities') {
          this.router.navigate(['/humanities']);
        } else if (word === 'law') {
          this.router.navigate(['/law']);
        } else if (word === 'life science') {
          this.router.navigate(['/life-science']);
        } else if (word === 'pharmacy' || word === 'pharmaceutical') {
          this.router.navigate(['/pharmaceutical-science']);
        } else if (word === 'physical science') {
          this.router.navigate(['/physical-science']);
        } else if (word === 'vocational') {
          this.router.navigate(['/vocational-courses']);
        } else if (word === 'about') {
          this.router.navigate(['/about-starex']);
        } else if (word === 'chancellor') {
          this.router.navigate(['/chancellor-message']);
        } else if (word === 'vc') {
          this.router.navigate(['/vc-message']);
        } else if (word === 'registrar') {
          this.router.navigate(['/registrar-message']);
        } else if (word === 'osd') {
          this.router.navigate(['/osd-message']);
        } else if (word === 'coe') {
          this.router.navigate(['/coe']);
        } else if (word === 'recognition' || word === 'approval') {
          this.router.navigate(['/approval-recognition']);
        } else if (word === 'disclosure') {
          this.router.navigate(['/disclosure']);
        } else if (word === 'mou') {
          this.router.navigate(['/starex-mou']);
        } else if (word === 'ugc') {
          this.router.navigate(['/ugc-inspection']);
        } else if (word === 'annual report') {
          this.router.navigate(['/annual-reports']);
        } else if (word === 'ombudsperson') {
          this.router.navigate(['/ombudsperson']);
        } else if (word === 'policy' || word === 'policies') {
          this.router.navigate(['/policies']);
        }
        this.suggestion = null;
        return;
      }
    }
    // Otherwise, show suggestions for typos
    const suggestions: Set<string> = new Set();
    for (const word of words) {
      for (const keyword of this.validKeywords) {
        if (this.levenshtein(word, keyword) <= 2 && !word.includes(keyword)) {
          suggestions.add(keyword);
        }
      }
    }
    if (suggestions.size > 0) {
      this.suggestion = `Did you mean: ${Array.from(suggestions).map(s => '"' + s + '"').join(', ')}?`;
      return;
    }
    // If no routing and no suggestions, show fallback message
    this.suggestion = 'Sorry, I could not understand. Please contact admin 12345678.';
  }
}
