import { Component } from '@angular/core';
import { HeaderComponent } from './header/index';
import { FooterComponent } from './footer/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My First Angular Application';
}

