import { Component, OnInit } from '@angular/core';

import { DomainDataService } from '../../services/domain-data.service';
import { InfrastructureNodeListService } from '../../services/infrastructure-node-list.service';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-cypher-menu-template',
  templateUrl: './cypher-menu-template.component.html',
  styleUrls: ['./cypher-menu-template.component.css']
})
export class CypherMenuTemplateComponent implements OnInit {

  // tslint:disable-next-line: max-line-length
  constructor(public domainDataService: DomainDataService, public infrastructureNodeList: InfrastructureNodeListService, public common: CommonService) { }

  ngOnInit() {
  }

  HideCypherMenu(): void {
    document.getElementsByTagName('body')[0].style.cssText = '';
    this.infrastructureNodeList.showCypherMenu = false;
  }
  AddNodeToNodeList(type: string, cypher: string): void {
    // TODO: using nested switch to below initilization;
    this.infrastructureNodeList.AddNodeAtindex([
      this.infrastructureNodeList.selectedPlusIndex,
      type,
      ((type === 'View') && (cypher === 'Text')) ? null : this.common.encodeDecodeOptions[0],
      [
        cypher,
        this.common.getDefaultConfiguration(type, cypher)
      ],
      'Input String',
      'Output String'
    ]);
    this.HideCypherMenu();
  }
  CypherMenuClickEventListner(eventtarget: any): void {
    if (!(document.getElementById('CypherMenu').contains(eventtarget))) {
      this.HideCypherMenu();
    }
  }
}
