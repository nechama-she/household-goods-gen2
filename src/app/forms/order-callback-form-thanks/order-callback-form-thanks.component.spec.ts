import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderCallbackFormThanksComponent } from './order-callback-form-thanks.component';

describe('OrderCallbackFormThanksComponent', () => {
  let component: OrderCallbackFormThanksComponent;
  let fixture: ComponentFixture<OrderCallbackFormThanksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrderCallbackFormThanksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrderCallbackFormThanksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
