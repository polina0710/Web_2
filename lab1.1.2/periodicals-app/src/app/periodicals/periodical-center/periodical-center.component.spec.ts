import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PeriodicalCenterComponent } from './periodical-center.component';

describe('PeriodicalCenterComponent', () => {
  let component: PeriodicalCenterComponent;
  let fixture: ComponentFixture<PeriodicalCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PeriodicalCenterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeriodicalCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
