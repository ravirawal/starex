import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { Footer } from "./footer/footer";
import { LeftNav } from "./left-nav/left-nav";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, LeftNav],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'starex';
}
