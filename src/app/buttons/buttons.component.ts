import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

  // Style
  boldItalica: string = 'bold italica'

  buttonState:boolean = true;
  applyBold:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  addStyleClasses() {


  }

}
