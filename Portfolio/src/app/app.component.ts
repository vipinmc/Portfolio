import { Component } from '@angular/core';
import { HeaderComponent } from './shared/header/index';
import { FooterComponent } from './shared/footer/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My First Angular Application';
}

