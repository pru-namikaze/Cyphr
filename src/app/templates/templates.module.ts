import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainTemplateComponent } from './main-template.component';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { NodeTemplateComponent } from './node-template/node-template.component';

@NgModule({
  declarations: [
    MainTemplateComponent,
    HeaderComponent,
    FooterComponent,
    MainComponentComponent,
    NodeTemplateComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MainComponentComponent
  ]
})
export class TemplatesModule { }
