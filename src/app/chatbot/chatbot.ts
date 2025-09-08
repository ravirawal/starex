import { Component } from '@angular/core';
import { ChatbotModal } from "../chatbot-modal/chatbot-modal";
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FacultyService } from '../services/facultyService';
import { DEPARTMENTS, DESIGNATIONS, ROUTE_MATCH, TOPICS } from '../services/data';

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
  private lastSuggestions: string[] = [];

  constructor(private router: Router, private facultyService: FacultyService) {}

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
  'chancellor', 'vice chancellor', 'center of examination', 'pharmacy', 'agriculture', 'humanities', 'registrar', 'vc', 'engineering', 'physical', 'physics', 'vocational',
    'disclosure', 'mou', 'policies', 'recognition', 'annual report', 'ombudsperson', 'law', 'home', 'commerce', 'management',
  'computer', 'cse', 'technology', 'hotel', 'life science', 'pharmaceutical', 'starex', 'osd', 'coe', 'ugc'
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
  const msg = message.toLowerCase().trim();
  const words = this.getFilteredWords(msg);
console.log('User message received:', msg, words);
  if (this.handleAcknowledgments(msg)) return;
  if (this.handleGreetings(msg)) return;

  const intent = this.parseIntent(msg);

  // Fee-related routing
  if (intent.topic === 'fee' && intent.department) {
    this.suggestion = `Showing fee details for ${intent.department}.`;
    this.router.navigate([DEPARTMENTS[intent.department]]);
    return;
  }

  // Faculty-related search
  if (
    intent.topic === 'faculty' ||
    intent.designation ||
    intent.topic === 'research' ||
    msg.includes('faculty') ||
    msg.includes('department') ||
    msg.includes('dean')
  ) {
    if (intent.department) {
      this.facultyService.setSearchTerm({
        designation: intent.designation,
        department: intent.department
      });
      this.suggestion = `Showing ${intent.designation ?? 'faculty'} from ${intent.department}.`;
      this.router.navigate(['/faculty']);
      return;
    }
  }
  this.handleFacultySearch(msg, []);
  // General department routing
  if (intent.department && !intent.topic) {
    this.suggestion = `Taking you to the ${intent.department} page.`;
    this.router.navigate([DEPARTMENTS[intent.department]]);
    return;
  }

  if (this.handleRouteNavigation(msg)) return;
  if (this.handleFacultySearch(msg, words)) return;
  if (this.handleTypoSuggestions(words)) return;
  if (this.handleConfirmation(msg)) return;

  this.suggestion = 'I couldn’t understand your request. Could you please clarify what you’re looking for—faculty, fee, or department info?';
}


private getFilteredWords(msg: string): string[] {
  console.log('Function getFilteredWords', msg)
  const stopWords: string[] = [/* your full stopWords list */];
  return msg.split(/\s+/).filter(w => !stopWords.includes(w));
}

private handleAcknowledgments(msg: string): boolean {
  console.log('Function handleAcknowledgments', msg)
  const acknowledgments = ['ok', 'okay', 'thanks', 'thank you', 'thx', 'thankyou', 'ty', 'great', 'fine', 'good', 'awesome', 'cool'];
  const ackReplies = [
    'You’re welcome!',
    'Glad I could help!',
    'Happy to assist!',
    'Anytime!',
    'If you have more questions, just ask!',
    'Always here to help!'
  ];
  if (acknowledgments.includes(msg)) {
    this.suggestion = this.getRandom(ackReplies);
    console.log('Acknowledgment handled', this.suggestion);
    return true;
  }
  return false;
}

private handleGreetings(msg: string): boolean {
  console.log('Function handleGreetings', msg);
  const greetings = ['hi', 'hello', 'hey', 'good morning', 'good afternoon', 'good evening'];
  const greetingReplies = [
    'Hello! How can I help you today?',
    'Hi there! What can I do for you?',
    'Hey! Need any assistance?',
    'Greetings! How may I assist you?',
    'Hi! Let me know if you have any questions.',
    'Hello! I am here to help.'
  ];
  if (greetings.includes(msg)) {
    this.suggestion = this.getRandom(greetingReplies);
    console.log('Greeting handled', this.suggestion);
    return true;
  }
  return false;
}

private handleFacultySearch(msg: string, words: string[]): boolean {
  console.log('Function handleFacultySearch', msg, words);
  const dept = this.matchDepartmentPhrase(msg);
  if (dept) {
    this.facultyService.setSearchTerm({ department: dept });
    this.suggestion = `Showing faculty from ${dept} department.`;
    this.router.navigate(['/faculty']);
    return true;
  }

  const fuzzyName = this.fuzzyMatchFacultyName(msg);
  if (fuzzyName) {
    this.facultyService.setSearchTerm({ name: fuzzyName })
    this.suggestion = `Showing faculty members matching "${fuzzyName}".`;
    this.router.navigate(['/faculty']);
    return true;
  }

  return false;
}

private handleRouteNavigation(msg: string): boolean {
  console.log('Function handleRouteNavigation', msg);
  const routeMap: { [key: string]: string } = ROUTE_MATCH;

  // Sort keywords by length (descending) to prioritize longer matches
  const sortedKeywords = Object.keys(routeMap).sort((a, b) => b.length - a.length);

  for (const keyword of sortedKeywords) {
    if (msg.includes(keyword)) {
      const targetRoute = routeMap[keyword];
      console.log(`Matched keyword: ${keyword}, Navigating to: ${targetRoute}`);

      if (targetRoute && this.router.url === targetRoute) {
        this.suggestion = 'You’re already on the relevant page. If you need more help, contact support at 12345678.';
        return true;
      }

      this.suggestion = 'Taking you to the relevant page for more information.';
      this.router.navigate([targetRoute]);
      return true;
    }
  }

  return false;
}

private handleTypoSuggestions(words: string[]): boolean {
  console.log('Function handleTypoSuggestions', words);
  if (words.length === 1 && words[0].length < 4) return false;

  const suggestions: Set<string> = new Set();
  for (const word of words) {
    for (const keyword of this.validKeywords) {
      if (this.levenshtein(word, keyword) <= 2 && !word.includes(keyword)) {
        suggestions.add(keyword);
      }
    }
  }

  if (suggestions.size > 0) {
    this.lastSuggestions = Array.from(suggestions);
    this.suggestion = `Did you mean: ${this.lastSuggestions.map(s => `"${s}"`).join(', ')}?`;
    return true;
  }

  return false;
}

private handleConfirmation(msg: string): boolean {
    console.log('Function handleConfirmation', msg, this.lastSuggestions);

    const confirmations = ['yes', 'yeah', 'yep', 'sure', 'of course', 'please', 'yup'];
    const negatives = ['no', 'nope', 'nah', 'not really'];

    if (this.lastSuggestions.length === 1 && confirmations.includes(msg)) {
        const confirmed = this.lastSuggestions[0];
        console.log('User confirmed suggestion:', confirmed);
        this.lastSuggestions = []; // Clear to avoid reprocessing
        this.onUserMessage(confirmed); // Reprocess as if user typed it
        return true;
    }

    if (this.lastSuggestions.length > 0 && negatives.includes(msg)) {
        this.suggestion = 'Okay, let me know if you need anything else!';
        console.log('User rejected suggestion');
        this.lastSuggestions = [];
        return true;
    }

    if (confirmations.includes(msg)) {
        this.suggestion = 'Great! Please let me know what you need help with, or type your question.';
        console.log('General confirmation received');
        return true;
    }

    return false;
}

private getRandom(arr: string[]): string {
  console.log('Function getRandom', arr);
  return arr[Math.floor(Math.random() * arr.length)];
}

private fuzzyMatchFacultyName(input: string): string | null {
  console.log('Function fuzzyMatchFacultyName', input);
  const allFaculty = this.facultyService.getAllFaculty();
  const normalizedInput = input.toLowerCase().replace(/[^a-z\s]/g, '');

  const candidates: { word: string; score: number }[] = [];

  for (const faculty of allFaculty) {
    const words = faculty.name.split(/\s+/);

    for (const word of words) {
      const normalizedWord = word.toLowerCase().replace(/[^a-z]/g, '');

      let score = 0;

      if (normalizedInput === normalizedWord) {
        score = 100; // Exact match
      } else if (normalizedWord.includes(normalizedInput) || normalizedInput.includes(normalizedWord)) {
        score = 75; // Partial match
      } else {
        const distance = this.levenshtein(normalizedInput, normalizedWord);
        const lengthDiff = Math.abs(normalizedInput.length - normalizedWord.length);

        if (distance <= 2 && lengthDiff <= 1 && normalizedInput.length >= 4) {
          score = 50 - distance; // Fuzzy match with penalty
        }
      }

      if (score > 0) {
        candidates.push({ word, score });
      }
    }
  }

  if (candidates.length === 0) return null;

  // Sort by score descending, then alphabetically to stabilize
  candidates.sort((a, b) => b.score - a.score || a.word.localeCompare(b.word));

  console.log('Best match:', candidates[0].word);
  return candidates[0].word;
}


private matchDepartmentPhrase(msg: string): string | null {
  console.log('Function matchDepartmentPhrase', msg);
  const departmentMap: { [key: string]: string } = {
    'law': 'law',
    'pharmaceutics': 'pharmaceutics',
    'pharmacy': 'pharmaceutics',
    'physical science': 'physicalScience',
    'life science': 'lifeScience',
    'computer science': 'cse',
    'computer programs': 'cse',
    'computer technology': 'cse',
    'agriculture': 'agriculture'
  };

  for (const phrase in departmentMap) {
    if (msg.includes(phrase)) {
      return departmentMap[phrase];
    }
  }

  return null;
}

private parseIntent(msg: string): {
  department?: string;
  designation?: string;
  topic?: string;
} {
  console.log('Function parseIntent', msg);
  const lowerMsg = msg.toLowerCase();

  let department = Object.keys(DEPARTMENTS).find(dep => lowerMsg.includes(dep));
  const designation = DESIGNATIONS.find(d => lowerMsg.includes(d));
  const topic = TOPICS.find(t => lowerMsg.includes(t));

  return { department, designation, topic };
}
// private extractDesignationAndDepartment(msg: string): { designation?: string; department?: string } | null {
//   const designations = ['professor', 'assistant professor', 'associate professor', 'dean', 'hod'];
//   const departments = ['law', 'cse', 'pharmaceutics', 'agriculture', 'life science', 'physical science'];
// console.log('Function extractDesignationAndDepartment', msg);
//   const foundDesignation = designations.find(d => msg.includes(d));
//   const foundDepartment = departments.find(dep => msg.includes(dep));

//   if (foundDesignation) {
//     return { designation: foundDesignation, department: foundDepartment };
//   }

//   return null;
// }
}
