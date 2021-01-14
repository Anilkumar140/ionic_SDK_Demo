import { Component } from '@angular/core';
import * as myApp from 'demopackge';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  msg:any;
  constructor() {}
  getmessage(){
    this.msg=myApp.printMsg();
    console.log(this.msg);
   }
  

}
