import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  
  githubProfilePage: string;
  githubRepositoryPage: string;
  githubIssuePage: string;

  constructor() {
    this.githubProfilePage = 'https://github.com/pru-namikaze';
    this.githubRepositoryPage = 'https://github.com/pru-namikaze';
    this.githubIssuePage = 'https://github.com/pru-namikaze/Cyphr/issues';
  }
  OpenWebPageInNewTab(link: string): void {
    window.open(link, '_blank');
  }

}
