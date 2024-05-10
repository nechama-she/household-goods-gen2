import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdPartyReviewsComponent } from './third-party-reviews.component';

describe('ThirdPartyReviewsComponent', () => {
  let component: ThirdPartyReviewsComponent;
  let fixture: ComponentFixture<ThirdPartyReviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThirdPartyReviewsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThirdPartyReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
