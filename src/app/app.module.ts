import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AboutUsTemplateComponent } from './templates/about-us-template.component';
import { AppComponent } from './app.component';
import { TemplatesModule } from './templates/templates.module';
import { MainTemplateComponent } from './templates/main-template.component';
import { HomePageTemplateComponent } from './templates/home-page-template.component';

const routes: Routes = [
  {path: 'AboutUs', component: AboutUsTemplateComponent},
  {path: '', component: MainTemplateComponent},
  {path: '**', component: MainTemplateComponent}
];


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TemplatesModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'AboutUs', component: AboutUsTemplateComponent, pathMatch: 'full'},
      {path: '', component: HomePageTemplateComponent, pathMatch: 'full'},
      {path: 'Cypher', component: MainTemplateComponent, pathMatch: 'full'},
      {path: '**', component: HomePageTemplateComponent, pathMatch: 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
