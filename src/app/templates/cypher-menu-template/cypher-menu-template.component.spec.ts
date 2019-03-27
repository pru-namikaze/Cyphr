import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CypherMenuTemplateComponent } from './cypher-menu-template.component';

describe('CypherMenuTemplateComponent', () => {
  let component: CypherMenuTemplateComponent;
  let fixture: ComponentFixture<CypherMenuTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CypherMenuTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CypherMenuTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
