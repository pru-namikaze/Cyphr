import { Injectable } from '@angular/core';
import { of, Observable, fromEvent } from 'rxjs';

import { DomainDataService } from './domain-data.service';
import { isUndefined, isNullOrUndefined, isNull } from 'util';

@Injectable({
  providedIn: 'root'
})

//   type ListNode = [number, string, string, [string, any], string, string];
//   [0]: id: number;
//   [1]: templateName: string;
//   [2]: encodeDecodeOption: string;
//   [
//      [3][0]: cypherName: string;
//      [3][1]: cypherConfigrations: Array<[string, string]>;
//   ]
//   [4]: inputString: string;
//   [5]: outputString: string;

export class InfrastructureNodeListService {

  NodeList: Array<[number, string, string, [string, Array<[string, string]>], string, string]>;
  selectedPlusIndex: number;
  showCypherMenu: boolean;
  pageYOffset: number;
  modifyCurrentFlag: boolean;
  showBackToTopFlag: boolean;

  constructor(public domainData: DomainDataService) {
    this.NodeList = [];
    this.NodeList.push([0, 'View', null, ['Text', domainData.getDefaultConfiguration('View', 'Text')], 'Input String', null]);
    // tslint:disable-next-line: max-line-length
    this.NodeList.push([1, 'Transform', domainData.encodeDecodeOptions[0], ['Text Transform', domainData.getDefaultConfiguration('Transform', 'Text Transform')], 'Input String', 'Output String']);
    this.NodeList.push([2, 'View', null, ['Text', domainData.getDefaultConfiguration('View', 'Text')], 'Input String', null]);

    this.selectedPlusIndex = null;
    this.showCypherMenu = false;
    this.pageYOffset = 0;
    this.modifyCurrentFlag = false;
    this.showBackToTopFlag = false;
  }

  getNodeList(): Observable<Array<[number, string, string, [string, Array<[string, string]>], string, string]>> {
    return of(this.NodeList);
  }

  AddNodeAtindex(newNode: [number, string, string, [string, Array<[string, string]>], string, string]): void {
    // tslint:disable-next-line: prefer-const
    for (let node of this.NodeList) {
      if (node[0] >= newNode[0]) {
        node[0]++;
      }
    }
    this.NodeList.splice(newNode[0], 0, newNode);

  }

  RemoveNodeAtindex(index: number): void {
    // tslint:disable-next-line: prefer-const
    for (let node of this.NodeList) {
      if (node[0] > index) {
        node[0]--;
      }
    }
    this.NodeList.splice(index, 1);
    console.log(this.NodeList);
  }

  WindowScrollTo(yOffset: number): void {
    window.scrollTo(0, yOffset);
  }

  ShowCypherMenu(menuIndex?: number, modifyCurrentFlag?: boolean): void {
    this.modifyCurrentFlag = isUndefined(modifyCurrentFlag) ? this.modifyCurrentFlag : modifyCurrentFlag;
    this.selectedPlusIndex = isUndefined(menuIndex) ? 0 : menuIndex;
    console.table(this.NodeList);
  }
  AddNodeToNodeList(type: string, cypher: string, id?: number): void {
    const newNodeId: number = isNullOrUndefined(id) ? this.selectedPlusIndex : id;
    const newNode: [number, string, string, [string, Array<[string, string]>], string, string] = [
      newNodeId,
      type,
      ((type === 'View') && (cypher === 'Text')) ? null : this.domainData.encodeDecodeOptions[0],
      [
        cypher,
        this.domainData.getDefaultConfiguration(type, cypher)
      ],
      'Input String',
      'Output String'
    ];

    this.AddNodeAtindex(newNode);

    if (this.modifyCurrentFlag) {
      this.RemoveNodeAtindex(newNodeId - 1);
      this.modifyCurrentFlag = false;
    }
  }

  selectOptionClick(id: number, cypherName: string): void {
    id = id[0];
    this.AddNodeToNodeList(this.NodeList[id][1], cypherName, id);
    this.RemoveNodeAtindex(id + 1);
  }

  UpdateCypherOptionValueFromNodeList(id: number, filterOption: string): void {
    console.log('123456789');
    const type: string = this.NodeList[id][1];
    const cypher: string = this.NodeList[id][2];

    const newNode: [number, string, string, [string, Array<[string, string]>], string, string] = this.NodeList[id];
    if (!isNull(this.NodeList[id][3][1])) {
      for (const option of this.NodeList[id][3][1]) {
        if (option[0] === filterOption) {
          option[1] = (document.getElementById((id + option[0]).toString()) as HTMLInputElement).value;
        }
      }
    } else {
      return null;
    }
    this.AddNodeAtindex(newNode);
    this.RemoveNodeAtindex(id + 1);

    console.log(this.NodeList);
  }

  selectencodeDecodeOptionClick(option: string, id: number): void {
    this.NodeList[id][2] = option;
  }

  ShowBackToTop(): void {
    const scrollHeight: number = document.documentElement.scrollHeight;
    const clientHeight: number = document.documentElement.clientHeight;
    let btnBottomHeight: number = 5;

    if ((pageYOffset >= scrollHeight - 1.2 * clientHeight) && (pageYOffset <= scrollHeight - clientHeight)) {
      btnBottomHeight = ((5 * pageYOffset - 5 * scrollHeight + 6 * clientHeight) * 20 / clientHeight) + 5;
    }

    if (pageYOffset * 100 / document.documentElement.clientHeight > 200) {
      (document.getElementById('back-to-top-btn') as HTMLDivElement).style.display = 'block';
      (document.getElementById('back-to-top-btn') as HTMLDivElement).style.bottom = btnBottomHeight + 'vh';
      this.showBackToTopFlag = true;
    } else {
      (document.getElementById('back-to-top-btn') as HTMLDivElement).style.display = 'none';
      this.showBackToTopFlag = false;
    }
  }

  ArrowToPlus(id: number, showFlag: boolean) {
    if (showFlag) {
      document.getElementById(id + '-node-list-conjuction').children[0].className = 'fas fa-plus';
    } else {
      document.getElementById(id + '-node-list-conjuction').children[0].className = 'fas fa-chevron-down';

    }
  }
}
