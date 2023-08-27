import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesQuestionsComponent } from './courses-questions.component';

describe('CoursesQuestionsComponent', () => {
  let component: CoursesQuestionsComponent;
  let fixture: ComponentFixture<CoursesQuestionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoursesQuestionsComponent]
    });
    fixture = TestBed.createComponent(CoursesQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
