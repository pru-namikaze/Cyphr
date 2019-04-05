import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

import { DomainDataService } from './domain-data.service';
import { isUndefined } from 'util';

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
  }

  getNodeList(): Observable<Array<[number, string, string, [string, Array<[string, string]>], string, string]>> {
    return of(this.NodeList);
  }

  AddNodeAtindex(newNode: [number, string, string, [string, Array<[string, string]>], string, string]) {
    // tslint:disable-next-line: prefer-const
    for (let node of this.NodeList) {
      if (node[0] >= newNode[0]) {
        node[0]++;
      }
    }
    this.NodeList.splice(newNode[0], 0, newNode);

  }

  RemoveNodeAtindex(index: number) {
    // tslint:disable-next-line: prefer-const
    for (let node of this.NodeList) {
      if (node[0] > index) {
        node[0]--;
      }
    }
    this.NodeList.splice(index, 1);
  }

  ShowCypherMenu(menuIndex?: number, modifyCurrentFlag?: boolean) {
    this.pageYOffset = window.pageYOffset;
    window.scrollTo(0, 0);
    document.getElementsByTagName('body')[0].style.cssText = 'margin: 0; height: 100%; overflow: hidden';

    this.modifyCurrentFlag = isUndefined(modifyCurrentFlag) ? this.modifyCurrentFlag : modifyCurrentFlag;
    this.selectedPlusIndex = isUndefined(menuIndex) ? 0 : menuIndex;
    this.showCypherMenu = true;
  }

  HideCypherMenu(): void {
    document.getElementsByTagName('body')[0].style.cssText = '';
    this.showCypherMenu = false;
    window.scrollTo(0, this.pageYOffset);

  }
  AddNodeToNodeList(type: string, cypher: string): void {
    // TODO: using nested switch to below initilization;
    const newNode: [number, string, string, [string, Array<[string, string]>], string, string] = [
      this.selectedPlusIndex,
      type,
      ((type === 'View') && (cypher === 'Text')) ? null : this.domainData.encodeDecodeOptions[0],
      [
        cypher,
        this.domainData.getDefaultConfiguration(type, cypher)
      ],
      'Input String',
      'Output String'
    ];
    this.UpdateNode(newNode, this.selectedPlusIndex);


    this.HideCypherMenu();
  }

  UpdateNode(newNode: [number, string, string, [string, Array<[string, string]>], string, string], index: number): void {
    this.AddNodeAtindex(newNode);

    if (this.modifyCurrentFlag) {
      this.RemoveNodeAtindex(index - 1);
      this.modifyCurrentFlag = false;
    }
  }

  selectOptionClick(type: string, cypher: string, id: number): void {
    const newNode: [number, string, string, [string, Array<[string, string]>], string, string] = this.NodeList[id];

    newNode[3][0] = cypher;
    newNode[3][1] = this.domainData.getDefaultConfiguration(type, cypher);

    this.modifyCurrentFlag = true;
    this.UpdateNode(newNode, id + 1);
  }

  UpdateCypherOptionValueFromNodeList(id: number, filterOption: string): void {
    const newNode: [number, string, string, [string, Array<[string, string]>], string, string] = this.NodeList[id];

    const CypherValue = (document.getElementById('userInputTextBox') as HTMLInputElement).value;
    // this is not working fix it it is not updating the nodelist and thats causing the values to not update.
    console.log(this.NodeList[id]);
    for (let option of this.NodeList[id][3][1]) {
      if (option[0] === filterOption) {
        option[1] = CypherValue;

        this.modifyCurrentFlag = true;
        this.UpdateNode(newNode, id + 1);
        console.log(this.NodeList);
      }
    }
  }

  CypherMenuClickEventListner(eventtarget: any): void {
    if (!(document.getElementById('CypherMenu').contains(eventtarget))) {
      this.HideCypherMenu();
    }
  }

  selectencodeDecodeOptionClick(option: string, id: number): void {
    this.NodeList[id][2] = option;
  }

}
