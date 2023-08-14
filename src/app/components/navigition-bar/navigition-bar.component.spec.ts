import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigitionBarComponent } from './navigition-bar.component';

describe('NavigitionBarComponent', () => {
  let component: NavigitionBarComponent;
  let fixture: ComponentFixture<NavigitionBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavigitionBarComponent]
    });
    fixture = TestBed.createComponent(NavigitionBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
