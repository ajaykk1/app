import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutrisionListComponent } from './nutrision-list.component';

describe('NutrisionListComponent', () => {
  let component: NutrisionListComponent;
  let fixture: ComponentFixture<NutrisionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NutrisionListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NutrisionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
