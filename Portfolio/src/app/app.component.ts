import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { HeaderComponent } from './common/header/index';
import { FooterComponent } from './common/footer/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public hello = "Hello";
  public goodBye: string;

  @ViewChild('myInputText') inputText;

  constructor(){}

  ngOnInit(){
       setInterval(() => {this.send2Server();},2000)
   }

  title = 'My First Angular Application';

  //Output
  public setDataFromChild(data) {
    this.goodBye = data;
  }
  //Viewchild
  public send2Server() {
    let data = this.inputText.nativeElement;
    console.log(data.value)
  }

}

