import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoverMapComponent } from './mover-map.component';

describe('MoverMapComponent', () => {
  let component: MoverMapComponent;
  let fixture: ComponentFixture<MoverMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MoverMapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MoverMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
