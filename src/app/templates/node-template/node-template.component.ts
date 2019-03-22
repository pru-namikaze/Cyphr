import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-node-template',
  templateUrl: './node-template.component.html',
  styleUrls: ['./node-template.component.css']
})

export class NodeTemplateComponent implements OnInit {

  templateName: string;
  selectedOption: string;
  options: string[];
  selectedEncodeDecodeOption: string;
  encodeDecodeOptions: string[];

  constructor() {
    this.templateName = 'Transform';
    this.options = ['Text Format', 'Numerical System', 'Bitwise Operation'];
    this.selectedOption = 'Text Format';
    this.encodeDecodeOptions = ['Encode', 'Decode'];
    this.selectedEncodeDecodeOption = 'Encode';

  }

  ngOnInit() {
  }

  selectOptionClick(option: string): void {
    this.selectedOption = option;
  }

}

