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
  periodicals = PERIODICALS;

  constructor(private periodicalService: PeriodicalsService, private router: Router) {}

  onSubmit(form: NgForm) {
    if (!this.periodical.id) {
      const newId = this.periodicals.length ? Math.max(...this.periodicals.map(p => p.id)) + 1 : 1;
      this.periodicals.push({ ...this.periodical, id: newId }); 
    } else {
      const existing = this.periodicals.find(p => p.id === this.periodical.id);
      if (existing) {
        existing.name = this.periodical.name;
        existing.publisher = this.periodical.publisher;
        existing.price = this.periodical.price;
      }
    }
    this.periodical = { id: 0, name: '', publisher: '', price: 0 };
    form.resetForm();
  }


  onReset() {
    this.periodical = { id: 0, name: '', publisher: '', price: 0 };
  }

  goBack() {
    this.router.navigate(['/']); 
  }
}
