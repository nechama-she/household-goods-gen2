import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectDeliveryPageSmallScreenComponent } from './direct-delivery-page-small-screen.component';

describe('DirectDeliveryPageSmallScreenComponent', () => {
  let component: DirectDeliveryPageSmallScreenComponent;
  let fixture: ComponentFixture<DirectDeliveryPageSmallScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DirectDeliveryPageSmallScreenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DirectDeliveryPageSmallScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
