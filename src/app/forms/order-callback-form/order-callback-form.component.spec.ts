import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderCallbackFormComponent } from './order-callback-form.component';

describe('OrderCallbackFormComponent', () => {
  let component: OrderCallbackFormComponent;
  let fixture: ComponentFixture<OrderCallbackFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrderCallbackFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrderCallbackFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
