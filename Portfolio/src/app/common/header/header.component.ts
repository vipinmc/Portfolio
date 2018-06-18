import { 
    Component, 
    ViewChild, 
    OnInit, 
    Input, 
    Output, 
    EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  //Input 
  @Input() public state: string;
  //Output
  @Output() event: EventEmitter<string> = new EventEmitter();

  //Eventemitter, Output
  public goodBye = 'Good Bye';

  constructor() {
    console.log('header');
   }

  ngOnInit() {
  }

  //Output
  public sendToParent() {
    this.event.emit(this.goodBye);
  }

}
