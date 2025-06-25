import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovingGuideComponent } from './moving-guide.component';

describe('MovingGuideComponent', () => {
  let component: MovingGuideComponent;
  let fixture: ComponentFixture<MovingGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovingGuideComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MovingGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
