import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainTemplateComponent } from './main-template.component';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { MainComponentComponent } from './main-component/main-component.component';
import { ViewComponentComponent } from './view-component/view-component.component';
import { TransformComponent } from './transform/transform.component';
import { AlphabetsComponent } from './alphabets/alphabets.component';
import { SubstitutionCypherComponent } from './substitution-cypher/substitution-cypher.component';
import { EncodingComponent } from './encoding/encoding.component';
import { ModernCryptographComponent } from './modern-cryptograph/modern-cryptograph.component';
import { DescriptionComponent } from './description/description.component';
import { NodeTemplateComponent } from './node-template/node-template.component';

@NgModule({
  declarations: [
    MainTemplateComponent,
    HeaderComponent,
    FooterComponent,
    MainComponentComponent,
    ViewComponentComponent,
    TransformComponent,
    AlphabetsComponent,
    SubstitutionCypherComponent,
    EncodingComponent,
    ModernCryptographComponent,
    DescriptionComponent,
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
