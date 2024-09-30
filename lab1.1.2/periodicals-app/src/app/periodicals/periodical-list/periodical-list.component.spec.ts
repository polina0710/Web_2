import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodicalListComponent } from './periodical-list.component';

describe('PeriodicalListComponent', () => {
  let component: PeriodicalListComponent;
  let fixture: ComponentFixture<PeriodicalListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PeriodicalListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeriodicalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
