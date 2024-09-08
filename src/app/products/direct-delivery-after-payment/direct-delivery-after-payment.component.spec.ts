import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectDeliveryAfterPaymentComponent } from './direct-delivery-after-payment.component';

describe('DirectDeliveryAfterPaymentComponent', () => {
  let component: DirectDeliveryAfterPaymentComponent;
  let fixture: ComponentFixture<DirectDeliveryAfterPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DirectDeliveryAfterPaymentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DirectDeliveryAfterPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
