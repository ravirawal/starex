import { Component } from '@angular/core';
import { FlexLayoutModule } from 'ngx-flexible-layout';
import { MatIconModule } from "@angular/material/icon";
@Component({
  selector: 'app-footer',
  imports: [FlexLayoutModule, MatIconModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {

}
