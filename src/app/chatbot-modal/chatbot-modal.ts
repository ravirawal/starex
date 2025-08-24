import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
	selector: 'app-chatbot-modal',
	standalone: true,
	templateUrl: './chatbot-modal.html',
	styleUrl: './chatbot-modal.scss',
	imports: [CommonModule, FormsModule]
})
export class ChatbotModal implements OnChanges {
	@Input() closing = false;
	@Input() suggestion: string | null = null;
	@Output() close = new EventEmitter<void>();
	@Output() userMessage = new EventEmitter<string>();
	isAnimating = false;
	userInput = '';

	messages: { sender: 'user' | 'bot', text: string }[] = [
		{ sender: 'bot', text: 'Hello! How can I help you today?' }
	];

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
		const msg = this.userInput.trim();
		if (msg) {
			this.messages.push({ sender: 'user', text: msg });
			this.userMessage.emit(msg);
			this.userInput = '';
		}
	}

	ngOnChanges(changes: SimpleChanges) {
		if (changes['suggestion'] && changes['suggestion'].currentValue) {
			this.messages.push({ sender: 'bot', text: changes['suggestion'].currentValue });
		}
	}
}
