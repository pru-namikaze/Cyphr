import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CypherOptionTemplateComponent } from './cypher-option-template.component';

describe('CypherOptionTemplateComponent', () => {
  let component: CypherOptionTemplateComponent;
  let fixture: ComponentFixture<CypherOptionTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CypherOptionTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CypherOptionTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
