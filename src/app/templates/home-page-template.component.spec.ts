import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageTemplateComponent } from './home-page-template.component';

describe('HomePageTemplateComponent', () => {
  let component: HomePageTemplateComponent;
  let fixture: ComponentFixture<HomePageTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePageTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
