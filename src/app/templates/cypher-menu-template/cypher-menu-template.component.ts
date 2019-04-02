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

}
