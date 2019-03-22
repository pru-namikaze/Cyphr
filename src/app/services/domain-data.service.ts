import { Injectable } from '@angular/core';
import { DomainDataDictionary } from './DomainDataDictionary';

@Injectable({
  providedIn: 'root'
})
export class DomainDataService {

  domainDataDictionary: Array<[string, string, Array<[string, string]>]>;

  constructor() {
    this.domainDataDictionary = DomainDataDictionary;
  }
  // Make it Level 2 Generic.
  getValue(array: any, key: string): any {
    let valueArray: any[];
    for (let element of array) {
      if (element[0] === key) {
        return element;
      }
    }
    return null;
  }

  getTypeArray(): string[] {
    let typeArray: string[];
    for (let element of this.domainDataDictionary) {
      typeArray.push(element[0].toString());
    }
    return typeArray;
  }

  getTypeDescripion(type: string): string {
    let element: [string, string, Array<[string, string]>] = this.getValue(this.domainDataDictionary, type);
    return element[1];
  }

  getTypeCypherArray(type: string): string[] {
    let TypeCypherArray: string[];
    let element: [string, string, Array<[string, string]>] = this.getValue(this.domainDataDictionary, type);
    for (let item of element[2]) {
      TypeCypherArray.push(item[0]);
    }
    return TypeCypherArray;
  }

  getTypeDescription(type: string, cypherName: string) {
    let element: [string, string, Array<[string, string]>] = this.getValue(this.domainDataDictionary, type);
    let cypher: [string, string] = this.getValue(element, cypherName);
    return cypher[1];
  }

}
