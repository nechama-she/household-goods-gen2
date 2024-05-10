import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleQuoteComponent } from './article-quote.component';

describe('ArticleQuoteComponent', () => {
  let component: ArticleQuoteComponent;
  let fixture: ComponentFixture<ArticleQuoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArticleQuoteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArticleQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
