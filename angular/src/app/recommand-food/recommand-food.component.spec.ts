import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommandFoodComponent } from './recommand-food.component';

describe('RecommandFoodComponent', () => {
  let component: RecommandFoodComponent;
  let fixture: ComponentFixture<RecommandFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecommandFoodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommandFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
