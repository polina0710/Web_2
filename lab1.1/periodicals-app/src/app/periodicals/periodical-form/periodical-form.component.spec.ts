import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodicalFormComponent } from './periodical-form.component';

describe('PeriodicalFormComponent', () => {
  let component: PeriodicalFormComponent;
  let fixture: ComponentFixture<PeriodicalFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PeriodicalFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeriodicalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
