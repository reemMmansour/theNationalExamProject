import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterRegisterComponent } from './after-register.component';

describe('AfterRegisterComponent', () => {
  let component: AfterRegisterComponent;
  let fixture: ComponentFixture<AfterRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AfterRegisterComponent]
    });
    fixture = TestBed.createComponent(AfterRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
