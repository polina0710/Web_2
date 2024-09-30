import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeriodicalCenterComponent } from './periodicals/periodical-center/periodical-center.component';
import { PeriodicalFormComponent } from './periodicals/periodical-form/periodical-form.component';

const routes: Routes = [
  { path: '', component: PeriodicalCenterComponent }, // Главная страница с периодическими изданиями
  { path: 'form', component: PeriodicalFormComponent } // Страница формы
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
