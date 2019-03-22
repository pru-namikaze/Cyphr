import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeTemplateComponent } from './node-template.component';

describe('NodeTemplateComponent', () => {
  let component: NodeTemplateComponent;
  let fixture: ComponentFixture<NodeTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NodeTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NodeTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
