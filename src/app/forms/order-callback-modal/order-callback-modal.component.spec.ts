import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderCallbackModalComponent } from './order-callback-modal.component';

describe('OrderCallbackModalComponent', () => {
  let component: OrderCallbackModalComponent;
  let fixture: ComponentFixture<OrderCallbackModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrderCallbackModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrderCallbackModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
