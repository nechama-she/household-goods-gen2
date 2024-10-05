import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadSubmittedComponent } from './lead-submitted.component';

describe('LeadSubmittedComponent', () => {
  let component: LeadSubmittedComponent;
  let fixture: ComponentFixture<LeadSubmittedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeadSubmittedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LeadSubmittedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
