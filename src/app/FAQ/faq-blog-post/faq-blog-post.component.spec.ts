import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqBlogPostComponent } from './faq-blog-post.component';

describe('FaqBlogPostComponent', () => {
  let component: FaqBlogPostComponent;
  let fixture: ComponentFixture<FaqBlogPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FaqBlogPostComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FaqBlogPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
