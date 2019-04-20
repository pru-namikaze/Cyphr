import { Component, OnInit, Input } from '@angular/core';
import { DomainDataService } from '../../services/domain-data.service';
import { InfrastructureNodeListService } from '../../services/infrastructure-node-list.service';
import { isNullOrUndefined } from 'util';

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
    console.table(this.infrastructureNodeList.NodeList);
    this.cypherOptions = this.domainData.getCypherOptions(this.infrastructureNodeList.NodeList[this.id][1], this.infrastructureNodeList.NodeList[this.id][3][0]);
    console.table([this.id, this.cypherOptions]);
  }

  isInputRange(optionArray: any): boolean {
    if (!((isNaN(optionArray[0])) && (isNaN(optionArray[0])))) {
      return true;
    }
    return false;
  }

  getCypherOptionValueFromNodeList(NodeListOptionValueArray: Array<[number, string, string]>, filterOption: number): string {
    for (const option of NodeListOptionValueArray) {
      if ( option[0] === filterOption) {
        return option[2];
      }
    }
    return null;
  }

  isView() {
    if (isNullOrUndefined(this.cypherOptions)) {
      return true;
    }
    return false;
  }

}
