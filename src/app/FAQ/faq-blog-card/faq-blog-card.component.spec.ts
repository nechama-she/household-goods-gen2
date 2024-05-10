import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqBlogCardComponent } from './faq-blog-card.component';

describe('FaqBlogCardComponent', () => {
  let component: FaqBlogCardComponent;
  let fixture: ComponentFixture<FaqBlogCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FaqBlogCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FaqBlogCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
