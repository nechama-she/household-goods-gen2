import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectDeliveryPageComponent } from './direct-delivery-page.component';

describe('DirectDeliveryPageComponent', () => {
  let component: DirectDeliveryPageComponent;
  let fixture: ComponentFixture<DirectDeliveryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DirectDeliveryPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DirectDeliveryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
