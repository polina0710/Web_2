import { Injectable } from '@angular/core';
import { Periodical } from '../mock-periodical-list';

@Injectable({
  providedIn: 'root'
})
export class PeriodicalsService {
  periodicals: Periodical[] = [];

  addPeriodical(newPeriodical: Periodical) {
    this.periodicals.push(newPeriodical);
  }

  updatePeriodical(updatedPeriodical: Periodical) {
    const index = this.periodicals.findIndex(p => p.id === updatedPeriodical.id);
    if (index !== -1) {
      this.periodicals[index] = updatedPeriodical;
    }
  }

  getPeriodicals() {
    return this.periodicals;
  }
}
