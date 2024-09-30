import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeriodicalCenterComponent } from './periodical-center/periodical-center.component';
import { PeriodicalListComponent } from './periodical-list/periodical-list.component';
import { PeriodicalDetailsComponent } from './periodical-details/periodical-details.component';
import { PeriodicalFormComponent } from './periodical-form/periodical-form.component';

const routes: Routes = [
  {
    path: '', component: PeriodicalCenterComponent, children: [
      { path: '', component: PeriodicalListComponent },  // Путь для списка изданий
    ]
  },
  { path: 'form', component: PeriodicalFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeriodicalsRoutingModule { }
