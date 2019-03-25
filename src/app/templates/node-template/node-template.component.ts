import { Component, OnInit, Input } from '@angular/core';
import { DomainDataService } from '../../services/domain-data.service';

@Component({
  selector: 'app-node-template',
  templateUrl: './node-template.component.html',
  styleUrls: ['./node-template.component.css']
})

export class NodeTemplateComponent implements OnInit {

  @Input() templateName: string = 'View';

  selectedOption: string;
  options: string[];
  selectedEncodeDecodeOption: string;
  encodeDecodeOptions: string[];

  constructor(public domainDataService: DomainDataService) {
    console.log(domainDataService.getTypeArray());
    this.options = this.domainDataService.getTypeCypherArray(this.templateName);
    this.selectedOption = this.options[0];
    this.encodeDecodeOptions = ['Encode', 'Decode'];
    this.selectedEncodeDecodeOption = 'Encode';

  }

  ngOnInit() {
  }

  selectOptionClick(option: string): void {
    this.selectedOption = option;
  }

}

