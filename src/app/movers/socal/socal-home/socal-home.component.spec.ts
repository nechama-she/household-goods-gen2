import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocalHomeComponent } from './socal-home.component';

describe('SocalHomeComponent', () => {
  let component: SocalHomeComponent;
  let fixture: ComponentFixture<SocalHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SocalHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SocalHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
