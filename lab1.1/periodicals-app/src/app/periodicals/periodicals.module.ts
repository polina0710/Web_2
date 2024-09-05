import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeriodicalCenterComponent } from './periodical-center/periodical-center.component';
import { PeriodicalListComponent } from './periodical-list/periodical-list.component';
import { PeriodicalDetailsComponent } from './periodical-details/periodical-details.component';
import { PeriodicalsRoutingModule } from './periodicals-routing.module';

@NgModule({
  declarations: [
    PeriodicalCenterComponent,
    PeriodicalListComponent,
    PeriodicalDetailsComponent
  ],
  imports: [
    CommonModule,
    PeriodicalsRoutingModule
  ]
})
export class PeriodicalsModule { }
