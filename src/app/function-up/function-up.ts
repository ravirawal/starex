import { Component } from '@angular/core';

@Component({
  selector: 'app-function-up',
  imports: [],
  templateUrl: './function-up.html',
  styleUrl: './function-up.scss',
  standalone: true
})
export class FunctionUPComponent {
  openUniPage(){
        window.open("https://www.functionupuniversity.com/",'_blank')
    }
}