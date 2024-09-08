import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsolidatedMoveComponent } from './consolidated-move.component';

describe('ConsolidatedMoveComponent', () => {
  let component: ConsolidatedMoveComponent;
  let fixture: ComponentFixture<ConsolidatedMoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConsolidatedMoveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsolidatedMoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
