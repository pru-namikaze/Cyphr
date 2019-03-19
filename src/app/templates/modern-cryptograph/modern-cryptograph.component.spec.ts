import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModernCryptographComponent } from './modern-cryptograph.component';

describe('ModernCryptographComponent', () => {
  let component: ModernCryptographComponent;
  let fixture: ComponentFixture<ModernCryptographComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModernCryptographComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModernCryptographComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
