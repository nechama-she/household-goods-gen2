import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackingMaterialsTableComponent } from './packing-materials-table.component';

describe('PackingMaterialsTableComponent', () => {
  let component: PackingMaterialsTableComponent;
  let fixture: ComponentFixture<PackingMaterialsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PackingMaterialsTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PackingMaterialsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
