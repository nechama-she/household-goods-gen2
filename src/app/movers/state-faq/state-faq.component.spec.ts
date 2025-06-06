import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateFaqComponent } from './state-faq.component';

describe('StateFaqComponent', () => {
  let component: StateFaqComponent;
  let fixture: ComponentFixture<StateFaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StateFaqComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StateFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
