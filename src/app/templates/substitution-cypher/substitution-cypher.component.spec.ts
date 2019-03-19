import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubstitutionCypherComponent } from './substitution-cypher.component';

describe('SubstitutionCypherComponent', () => {
  let component: SubstitutionCypherComponent;
  let fixture: ComponentFixture<SubstitutionCypherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubstitutionCypherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubstitutionCypherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
