import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';


@Component({
  selector: 'app-events',
  imports: [MatButtonModule, MatMenuModule, MatIconModule, MatListModule, MatToolbarModule, MatSidenavModule],
  templateUrl: './events.html',
  styleUrl: './events.scss'
})
export class EventsComponent {

}
