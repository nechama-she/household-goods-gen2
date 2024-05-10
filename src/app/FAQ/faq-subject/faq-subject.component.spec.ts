import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FAQSubjectComponent } from './faq-subject.component';

describe('FAQSubjectComponent', () => {
  let component: FAQSubjectComponent;
  let fixture: ComponentFixture<FAQSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FAQSubjectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FAQSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
