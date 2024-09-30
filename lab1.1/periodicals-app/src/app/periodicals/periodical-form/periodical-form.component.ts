import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Periodical } from '../mock-periodical-list';
import { PERIODICALS } from '../mock-periodical-list';
import { PeriodicalsService } from '../services/periodicals.service';

@Component({
  selector: 'app-periodical-form',
  templateUrl: './periodical-form.component.html'
})
export class PeriodicalFormComponent {
  periodical: Periodical = { id: 0, name: '', publisher: '', price: 0 };

  ngOnInit() {
    console.log('PeriodicalFormComponent OnInit called');  // Лог при вызове OnInit
  }

  constructor(private periodicalService: PeriodicalsService, private router: Router) {}

  onSubmit(form: NgForm) {
    if (this.periodical.id) {
      this.periodicalService.updatePeriodical(this.periodical); // Логика для обновления
    } else {
      this.periodicalService.addPeriodical(this.periodical); // Логика для добавления
    }
    this.router.navigate(['/']);  // Возврат к списку после сохранения
  }

  onReset() {
    this.periodical = { id: 0, name: '', publisher: '', price: 0 };
  }

  goBack() {
    this.router.navigate(['/']); // Возврат к списку
  }
}
