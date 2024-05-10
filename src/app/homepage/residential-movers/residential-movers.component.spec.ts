import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentialMoversComponent } from './residential-movers.component';

describe('ResidentialMoversComponent', () => {
  let component: ResidentialMoversComponent;
  let fixture: ComponentFixture<ResidentialMoversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResidentialMoversComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResidentialMoversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
