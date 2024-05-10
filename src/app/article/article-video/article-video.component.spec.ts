import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleVideoComponent } from './article-video.component';

describe('ArticleVideoComponent', () => {
  let component: ArticleVideoComponent;
  let fixture: ComponentFixture<ArticleVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArticleVideoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArticleVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
