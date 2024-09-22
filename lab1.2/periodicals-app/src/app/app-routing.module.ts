import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeriodicalCenterComponent } from './periodicals/periodical-center/periodical-center.component';

const routes: Routes = [
  { path: '', component: PeriodicalCenterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
