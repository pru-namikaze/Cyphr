import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

//   type ListNode = [string, string, [string, any], string, string];
//   templateName: string;
//   encodeDecodeOption: string;
//   [
//      cypherName: string;
//      cypherConfigrations: any;
//   ]
//   inputString: string;
//   outputString: string;
export class InfrastructureNodeListService {

  NodeList: Array<[string, string, [string, any], string, string]> = [];

  constructor() {
    this.NodeList.push(['View', null, ['Text', null], 'Input String', null]);
    this.NodeList.push(['Transform', 'Encode', ['Text Transform', []], 'Input String', 'Output String']);
    this.NodeList.push(['View', null, ['Text', null], 'Input String', null]);
  }


}
