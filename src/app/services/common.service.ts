import { Injectable } from '@angular/core';
import { isUndefined } from 'util';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  encodeDecodeOptions: string[] = [];

  constructor() {
    this.encodeDecodeOptions = ['Encode', 'Decode'];
  }
  getDefaultConfiguration(type: string, cypher: string): any {
    // TODO: Work on it to give default configuration of the cypher
    if ((!isUndefined(type) && !isUndefined(cypher)) && ((type === 'View') && (cypher === 'Text'))) {
      return null;
    }
    return [];
  }
}
