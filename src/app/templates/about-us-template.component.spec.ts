import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsTemplateComponent } from './about-us-template.component';

describe('AboutUsTemplateComponent', () => {
  let component: AboutUsTemplateComponent;
  let fixture: ComponentFixture<AboutUsTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutUsTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutUsTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
