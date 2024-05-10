import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentialMoversPageComponent } from './residential-movers-page.component';

describe('ResidentialMoversPageComponent', () => {
  let component: ResidentialMoversPageComponent;
  let fixture: ComponentFixture<ResidentialMoversPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResidentialMoversPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResidentialMoversPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
