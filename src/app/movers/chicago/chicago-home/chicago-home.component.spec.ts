import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChicagoHomeComponent } from './chicago-home.component';

describe('ChicagoHomeComponent', () => {
  let component: ChicagoHomeComponent;
  let fixture: ComponentFixture<ChicagoHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChicagoHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChicagoHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
