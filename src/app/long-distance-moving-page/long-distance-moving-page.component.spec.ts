import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LongDistanceMovingPageComponent } from './long-distance-moving-page.component';

describe('LongDistanceMovingPageComponent', () => {
  let component: LongDistanceMovingPageComponent;
  let fixture: ComponentFixture<LongDistanceMovingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LongDistanceMovingPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LongDistanceMovingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
