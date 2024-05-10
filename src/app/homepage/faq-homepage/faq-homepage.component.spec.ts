import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FAQHomepageComponent } from './faq-homepage.component';

describe('FAQHomepageComponent', () => {
  let component: FAQHomepageComponent;
  let fixture: ComponentFixture<FAQHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FAQHomepageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FAQHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
