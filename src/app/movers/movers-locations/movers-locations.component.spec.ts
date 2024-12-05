import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoversLocationsComponent } from './movers-locations.component';

describe('MoversLocationsComponent', () => {
  let component: MoversLocationsComponent;
  let fixture: ComponentFixture<MoversLocationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MoversLocationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MoversLocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
