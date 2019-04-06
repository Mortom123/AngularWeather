import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {
  date: Date;
  
  constructor() { }

  ngOnInit() {
     this.date = new Date();
  }

}
