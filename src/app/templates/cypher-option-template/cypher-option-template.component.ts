import { Component, OnInit, Input } from '@angular/core';
import { DomainDataService } from '../../services/domain-data.service';
import { InfrastructureNodeListService } from '../../services/infrastructure-node-list.service';

@Component({
  selector: 'app-cypher-option',
  templateUrl: './cypher-option-template.component.html',
  styleUrls: ['./cypher-option-template.component.css']
})
export class CypherOptionTemplateComponent implements OnInit {

  @Input() id: number;
  cypherOptions: any;

  constructor(public infrastructureNodeList: InfrastructureNodeListService, public domainData: DomainDataService) {
   }

  ngOnInit() {
    this.id = this.id[0][0];
    // tslint:disable-next-line: max-line-length
    this.cypherOptions = this.domainData.getCypherOptions(this.infrastructureNodeList.NodeList[this.id][1], this.infrastructureNodeList.NodeList[this.id][3][0]);
  }

  isInputRange(optionArray: any): boolean {
    if (!((isNaN(optionArray[0])) && (isNaN(optionArray[0])))) {
      return true;
    }
    return false;
  }

}
