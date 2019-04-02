import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Observable, of } from 'rxjs';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { NodeTemplateComponent } from './node-template/node-template.component';

import { MainTemplateComponent } from './main-template.component';
import { CypherMenuTemplateComponent } from './cypher-menu-template/cypher-menu-template.component';
import { CypherOptionTemplateComponent } from './cypher-option-template/cypher-option-template.component';

@NgModule({
  declarations: [
    MainTemplateComponent,
    HeaderComponent,
    FooterComponent,
    MainComponentComponent,
    NodeTemplateComponent,
    CypherMenuTemplateComponent,
    CypherOptionTemplateComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MainComponentComponent
  ]
})
export class TemplatesModule { }
