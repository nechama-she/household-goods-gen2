import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectDeliveryComponent } from './direct-delivery.component';

describe('DirectDeliveryComponent', () => {
  let component: DirectDeliveryComponent;
  let fixture: ComponentFixture<DirectDeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DirectDeliveryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DirectDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
