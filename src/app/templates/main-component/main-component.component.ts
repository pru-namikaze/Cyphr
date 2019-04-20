import { Component, OnInit } from '@angular/core';
import { DomainDataService } from '../../services/domain-data.service';
import { InfrastructureNodeListService } from '../../services/infrastructure-node-list.service';
import { CommonService } from '../../services/common.service'

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {

  NodeList: Array<[number, string, string, [string, any], string, string]>;

  // tslint:disable-next-line: max-line-length
  constructor(public domainDataService: DomainDataService, public infrastructureNodeList: InfrastructureNodeListService, public common: CommonService) {
  }

  ngOnInit() {
    window.addEventListener( 'scroll', (): void => {
      this.infrastructureNodeList.ShowBackToTop();
    } );
  }
  getNodelist(): void {
    this.infrastructureNodeList.getNodeList().subscribe( NodeList => this.NodeList = NodeList);
  }

}
