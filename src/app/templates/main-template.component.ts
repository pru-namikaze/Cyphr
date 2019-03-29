import { Component, OnInit } from '@angular/core';

import { DomainDataService } from '../services/domain-data.service';
import { InfrastructureNodeListService } from '../services/infrastructure-node-list.service';
import { CommonService } from '../services/common.service';


@Component({
  selector: 'app-main-template',
  templateUrl: './main-template.component.html',
  styleUrls: ['./main-template.component.css']
})
export class MainTemplateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
