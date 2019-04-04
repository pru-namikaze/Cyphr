import { Component, OnInit, Input, Output } from '@angular/core';
import { DomainDataService } from '../../services/domain-data.service';
import { InfrastructureNodeListService } from '../../services/infrastructure-node-list.service';


@Component({
  selector: 'app-node-template',
  templateUrl: './node-template.component.html',
  styleUrls: ['./node-template.component.css']
})

export class NodeTemplateComponent implements OnInit {

  @Input() id: number;

  // tslint:disable-next-line: max-line-length
  constructor(public domainData: DomainDataService, public infrastructureNodeList: InfrastructureNodeListService) {
  }

  ngOnInit() {
  }

  TextareaInputChangeEventListener() {
    console.log('TextareaInputChangeEventListener');
  }

}
