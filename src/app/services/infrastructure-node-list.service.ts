import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

import { CommonService } from './common.service';
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
//      [3][1]: cypherConfigrations: any;
//   ]
//   [4]: inputString: string;
//   [5]: outputString: string;

export class InfrastructureNodeListService {

  NodeList: Array<[number, string, string, [string, any], string, string]>;
  selectedPlusIndex: number;
  showCypherMenu: boolean;

  constructor(public common: CommonService) {
    this.NodeList = [];
    this.NodeList.push([0, 'View', null, ['Text', common.getDefaultConfiguration('View', 'Text')], 'Input String', null]);
    // tslint:disable-next-line: max-line-length
    this.NodeList.push([1, 'Transform', common.encodeDecodeOptions[0], ['Text Transform', common.getDefaultConfiguration('Transform', 'Text Transform')], 'Input String', 'Output String']);
    this.NodeList.push([2, 'View', null, ['Text', common.getDefaultConfiguration('View', 'Text')], 'Input String', null]);

    this.selectedPlusIndex = null;
    this.showCypherMenu = false;
  }
  getNodeList(): Observable<Array<[number, string, string, [string, any], string, string]>> {
    return of(this.NodeList);
  }
  AddNodeAtindex(newNode: [number, string, string, [string, any], string, string]) {
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
  UpdateNodeAtindex(UpdatedNode: [number, string, string, [string, any], string, string]) {
    this.NodeList.splice(UpdatedNode[0], 1, UpdatedNode);
  }

  ShowCypherMenu(menuIndex?: number) {
    document.getElementsByTagName('body')[0].style.cssText = 'margin: 0; height: 100%; overflow: hidden';

    this.selectedPlusIndex = isUndefined(menuIndex) ? 0 : menuIndex;
    this.showCypherMenu = true;
  }
}
