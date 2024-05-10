import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FAQMainPageComponent } from './faq-main-page.component';

describe('FAQMainPageComponent', () => {
  let component: FAQMainPageComponent;
  let fixture: ComponentFixture<FAQMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FAQMainPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FAQMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
