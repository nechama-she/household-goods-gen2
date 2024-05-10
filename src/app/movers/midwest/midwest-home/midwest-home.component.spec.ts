import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MidwestHomeComponent } from './midwest-home.component';

describe('MidwestHomeComponent', () => {
  let component: MidwestHomeComponent;
  let fixture: ComponentFixture<MidwestHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MidwestHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MidwestHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
