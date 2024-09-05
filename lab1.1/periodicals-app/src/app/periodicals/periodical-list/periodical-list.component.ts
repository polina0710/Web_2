import { Component, OnInit } from '@angular/core';
import { PERIODICALS } from '../mock-periodical-list';

@Component({
  selector: 'app-periodical-list',
  templateUrl: './periodical-list.component.html',
  styleUrls: ['./periodical-list.component.css']
})
export class PeriodicalListComponent implements OnInit {
  periodicals = PERIODICALS;

  constructor() { }

  ngOnInit(): void {
  }
}
