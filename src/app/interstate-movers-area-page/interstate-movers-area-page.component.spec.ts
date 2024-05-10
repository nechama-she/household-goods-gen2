import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterstateMoversAreaPageComponent } from './interstate-movers-area-page.component';

describe('InterstateMoversAreaPageComponent', () => {
  let component: InterstateMoversAreaPageComponent;
  let fixture: ComponentFixture<InterstateMoversAreaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InterstateMoversAreaPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InterstateMoversAreaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
