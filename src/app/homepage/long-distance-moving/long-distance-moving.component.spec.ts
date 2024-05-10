import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LongDistanceMovingComponent } from './long-distance-moving.component';

describe('LongDistanceMovingComponent', () => {
  let component: LongDistanceMovingComponent;
  let fixture: ComponentFixture<LongDistanceMovingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LongDistanceMovingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LongDistanceMovingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
