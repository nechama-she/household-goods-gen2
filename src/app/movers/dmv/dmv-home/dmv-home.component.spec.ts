import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DmvHomeComponent } from './dmv-home.component';

describe('DmvHomeComponent', () => {
  let component: DmvHomeComponent;
  let fixture: ComponentFixture<DmvHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DmvHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DmvHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
