import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialsSpecializationComponent } from './materials-specialization.component';

describe('MaterialsSpecializationComponent', () => {
  let component: MaterialsSpecializationComponent;
  let fixture: ComponentFixture<MaterialsSpecializationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaterialsSpecializationComponent]
    });
    fixture = TestBed.createComponent(MaterialsSpecializationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
