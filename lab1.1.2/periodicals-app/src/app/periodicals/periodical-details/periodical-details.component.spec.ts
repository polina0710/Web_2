import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodicalDetailsComponent } from './periodical-details.component';

describe('PeriodicalDetailsComponent', () => {
  let component: PeriodicalDetailsComponent;
  let fixture: ComponentFixture<PeriodicalDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PeriodicalDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeriodicalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
