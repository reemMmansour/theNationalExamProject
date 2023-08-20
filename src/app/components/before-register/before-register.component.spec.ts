import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeforeRegisterComponent } from './before-register.component';

describe('BeforeRegisterComponent', () => {
  let component: BeforeRegisterComponent;
  let fixture: ComponentFixture<BeforeRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BeforeRegisterComponent]
    });
    fixture = TestBed.createComponent(BeforeRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
