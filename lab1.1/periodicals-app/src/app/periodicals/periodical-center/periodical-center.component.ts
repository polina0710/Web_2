import { Component, OnInit } from '@angular/core';
import { PERIODICALS } from '../mock-periodical-list';

@Component({
  selector: 'app-periodical-center',
  templateUrl: './periodical-center.component.html', // Убедитесь, что этот путь правильный
  styleUrls: ['./periodical-center.component.css']
})
export class PeriodicalCenterComponent implements OnInit {
  periodicals = PERIODICALS;

  constructor() { }

  ngOnInit(): void {
  }
}
