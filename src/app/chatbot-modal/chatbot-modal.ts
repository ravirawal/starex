import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
	selector: 'app-chatbot-modal',
	standalone: true,
	templateUrl: './chatbot-modal.html',
	styleUrl: './chatbot-modal.scss',
	imports: [CommonModule, FormsModule]
})
export class ChatbotModal implements OnChanges, AfterViewInit {
	@ViewChild('messagesContainer') messagesContainer!: ElementRef<HTMLDivElement>;
	@ViewChild('chatInput') chatInput!: ElementRef<HTMLInputElement>;
	ngAfterViewInit() {
		this.chatInput.nativeElement.focus();
		this.scrollToBottom();
	}
	@Input() closing = false;
	@Input() suggestion: string | null = null;
	@Output() close = new EventEmitter<void>();
	@Output() userMessage = new EventEmitter<string>();
	isAnimating = false;
	userInput = '';

	messages: { sender: 'user' | 'bot', text: string }[] = [];
	private firstOpen = true;

	constructor() {
		// Only show welcome message on very first open
		if (this.messages.length === 0) {
			this.messages.push({ sender: 'bot', text: 'Hello! How can I help you today?' });
		}
	}

	onMinimize() {
		this.isAnimating = true;
		setTimeout(() => {
			this.close.emit();
			this.isAnimating = false;
		}, 400);
	}

	getContainerClass() {
		return this.closing || this.isAnimating ? 'chatbot-modal-container slide-out' : 'chatbot-modal-container';
	}

	onSubmit(event: Event) {
    event.preventDefault();
    const msg = this.userInput.trim().toLowerCase();
    console.log('User submitted:', msg);

    if (msg === 'yes' && this.suggestion) {
        // Let chatbot.ts handle the suggestion confirmation
        this.userMessage.emit(msg);
        this.userInput = '';
        return;
    }

    if (msg) {
        this.messages.push({ sender: 'user', text: msg });
        this.userMessage.emit(msg);
        this.userInput = '';
        setTimeout(() => this.scrollToBottom(), 0);
    }
}

	ngOnChanges(changes: SimpleChanges) {
		if (changes['suggestion'] && changes['suggestion'].currentValue) {
			this.messages.push({ sender: 'bot', text: changes['suggestion'].currentValue });
			setTimeout(() => this.scrollToBottom(), 0);
		}
	}

	private scrollToBottom() {
		if (this.messagesContainer && this.messagesContainer.nativeElement) {
			const el = this.messagesContainer.nativeElement;
			el.scrollTop = el.scrollHeight;
		}
	}
}
