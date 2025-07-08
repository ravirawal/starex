import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';


@Component({
  selector: 'app-left-nav',
  imports: [MatButtonModule, MatMenuModule, MatIconModule, MatListModule, MatToolbarModule, MatSidenavModule],
  templateUrl: './left-nav.html',
  styleUrl: './left-nav.scss'
})
export class LeftNav {

}
