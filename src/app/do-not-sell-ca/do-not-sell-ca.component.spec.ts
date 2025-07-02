import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoNotSellCaComponent } from './do-not-sell-ca.component';

describe('DoNotSellCaComponent', () => {
  let component: DoNotSellCaComponent;
  let fixture: ComponentFixture<DoNotSellCaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoNotSellCaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoNotSellCaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
