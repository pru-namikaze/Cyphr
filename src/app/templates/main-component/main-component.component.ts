import { Component, OnInit } from '@angular/core';
import { DomainDataService } from '../../services/domain-data.service';
import { InfrastructureNodeListService } from '../../services/infrastructure-node-list.service';
import { Observable, fromEvent } from 'rxjs';


@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {

  NodeList: Array<[number, string, string, [string, any], string, string]>;

  constructor(public domainDataService: DomainDataService, public infrastructureNodeList: InfrastructureNodeListService) {
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
