import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { Footer } from "./footer/footer";
import { Chatbot } from "./chatbot/chatbot";
import { register } from 'swiper/element/bundle';
register()
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, Chatbot],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'starex';
}
