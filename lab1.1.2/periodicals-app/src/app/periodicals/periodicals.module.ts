import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeriodicalCenterComponent } from './periodical-center/periodical-center.component';
import { PeriodicalListComponent } from './periodical-list/periodical-list.component';
import { PeriodicalDetailsComponent } from './periodical-details/periodical-details.component';
import { PeriodicalsRoutingModule } from './periodicals-routing.module';
import { PeriodicalFormComponent } from './periodical-form/periodical-form.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    PeriodicalCenterComponent,
    PeriodicalListComponent,
    PeriodicalDetailsComponent,
    PeriodicalFormComponent
  ],
  imports: [
    CommonModule,
    PeriodicalsRoutingModule,
    FormsModule,
    RouterModule
  ]
})
export class PeriodicalsModule { }
