import { Component, OnInit } from '@angular/core';
import { DomainDataService } from '../../services/domain-data.service';


@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {

  constructor(public domainDataService: DomainDataService) {
  }

  ngOnInit() {
  }

}
