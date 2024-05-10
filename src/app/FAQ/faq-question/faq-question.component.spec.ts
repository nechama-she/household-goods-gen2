import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FAQQuestionComponent } from './faq-question.component';

describe('FAQQuestionComponent', () => {
  let component: FAQQuestionComponent;
  let fixture: ComponentFixture<FAQQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FAQQuestionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FAQQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
