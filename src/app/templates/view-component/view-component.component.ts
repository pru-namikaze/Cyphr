import { Component, OnInit } from '@angular/core';
import { Binary } from 'selenium-webdriver/firefox';
import { Options } from 'selenium-webdriver';

@Component({
  selector: 'app-view-component',
  templateUrl: './view-component.component.html',
  styleUrls: ['./view-component.component.css']
})
export class ViewComponentComponent implements OnInit {

  templateName: string;
  selectedOption: string;
  options: string[];

  constructor() {
    this.templateName = 'View';
    this.selectedOption = 'View';
    this.options = ['Text', 'Binary'];

   }

  ngOnInit() {
  }
  selectOptionClick(option: string): void {
    this.selectedOption = option;
  }
}
