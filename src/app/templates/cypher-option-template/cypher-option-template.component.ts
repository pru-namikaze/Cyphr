import { Component, OnInit, Input } from '@angular/core';
import { InfrastructureNodeListService } from '../../services/infrastructure-node-list.service';

@Component({
  selector: 'app-cypher-option',
  templateUrl: './cypher-option-template.component.html',
  styleUrls: ['./cypher-option-template.component.css']
})
export class CypherOptionTemplateComponent implements OnInit {

  @Input() id: number;

  constructor(public infrastructureNodeList: InfrastructureNodeListService) {
   }

  ngOnInit() {
    this.id = this.id[0][0];
    console.log(this.infrastructureNodeList.NodeList[this.id][1]);
    console.log(this.infrastructureNodeList.NodeList[this.id][3][0]);
  }

}
