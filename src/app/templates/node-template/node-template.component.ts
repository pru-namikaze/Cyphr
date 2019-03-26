import { Component, OnInit, Input } from '@angular/core';
import { DomainDataService } from '../../services/domain-data.service';
import { InfrastructureNodeListService } from '../../services/infrastructure-node-list.service';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-node-template',
  templateUrl: './node-template.component.html',
  styleUrls: ['./node-template.component.css']
})

export class NodeTemplateComponent implements OnInit {

  @Input() id: number;

  domainDataService: DomainDataService;
  infrastructureNodeList: InfrastructureNodeListService;
  common: CommonService;

  constructor() {
  }

  ngOnInit() {
    this.domainDataService = new DomainDataService();
    this.infrastructureNodeList = new InfrastructureNodeListService();
    this.common = new CommonService();
  }

  selectencodeDecodeOptionClick(option: string): void {
    this.infrastructureNodeList.NodeList[this.id][2] = option;
  }
  selectOptionClick(cypherName: string): void {
    this.infrastructureNodeList.NodeList[this.id][3][0] = cypherName;
    this.infrastructureNodeList.NodeList[this.id][3][1] = this.common.getDefaultConfiguration(cypherName);
  }
}

