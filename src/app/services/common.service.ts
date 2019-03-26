import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  encodeDecodeOptions: string[] = [];

  constructor() {
    this.encodeDecodeOptions = ['Encode', 'Decode'];
  }
  getDefaultConfiguration(cypherName: string): any {
    // TODO: Work on it to give default configuration of the cypher
    return [];
  }
}
