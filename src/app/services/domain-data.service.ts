import { Injectable } from '@angular/core';
import { DomainDataDictionary } from './DomainDataDictionary';
import { isUndefined } from 'util';

@Injectable({
  providedIn: 'root'
})
export class DomainDataService {

  domainDataDictionary: Array<[string, string, Array<[string, string, any]>]>;
  encodeDecodeOptions: string[];


  constructor() {
    this.domainDataDictionary = DomainDataDictionary;
    this.encodeDecodeOptions = ['Encode', 'Decode'];
  }

  // Make it Level 2 Generic.
  getValue(array: any, key: string): any {
    let valueArray: any[] = [];
    for (const element of array) {
      if (element[0] === key) {
        return element;
      }
    }
    return null;
  }

  getTypeArray(): string[] {
    let typeArray: string[] = [];
    for (const element of this.domainDataDictionary) {
      typeArray.push(element[0].toString());
    }
    return typeArray;
  }

  getTypeDescripion(type: string): string {
    const element: [string, string, Array<[string, string]>] = this.getValue(this.domainDataDictionary, type);
    return element[1];
  }

  getTypeCypherArray(type: string): string[] {
    let TypeCypherArray: string[] = [];
    const element: [string, string, Array<[string, string]>] = this.getValue(this.domainDataDictionary, type);
    for (const item of element[2]) {
      TypeCypherArray.push(item[0]);
    }
    return TypeCypherArray;
  }

  getCypherNameDescription(cypherType: string, cypherName: string): string {
    const type: [string, string, Array<[string, string, any]>] = this.getValue(this.domainDataDictionary, cypherType);
    const cypher: [string, string, any] = this.getValue(type[2], cypherName);
    return cypher[1];
  }

  getCypherOptions(cypherType: string, cypherName: string): any {
    const type: [string, string, Array<[string, string, any]>] = this.getValue(this.domainDataDictionary, cypherType);
    const cypher: [string, string, any] = this.getValue(type[2], cypherName);
    return cypher[2];
  }
  getDefaultConfiguration(type: string, cypher: string): any {
    // TODO: Work on it to give default configuration of the cypher
    const cypherOption: Array<[string, any]> = this.getCypherOptions(type, cypher);
    let defaultCypherOptions: Array<[string, string]> = [];

    if (cypherOption === null) {
      defaultCypherOptions = cypherOption;
    } else {
      for (const option of cypherOption) {

        defaultCypherOptions.push([option[0], option[1][0]]);
      }
    }

    return defaultCypherOptions;
  }
}
