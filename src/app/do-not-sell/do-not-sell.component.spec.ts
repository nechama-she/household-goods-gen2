import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoNotSellComponent } from './do-not-sell.component';

describe('DoNotSellComponent', () => {
  let component: DoNotSellComponent;
  let fixture: ComponentFixture<DoNotSellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoNotSellComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoNotSellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
