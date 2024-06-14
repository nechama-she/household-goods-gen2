import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovingServicesMainComponent } from './moving-services-main.component';

describe('MovingServicesMainComponent', () => {
  let component: MovingServicesMainComponent;
  let fixture: ComponentFixture<MovingServicesMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovingServicesMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MovingServicesMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
