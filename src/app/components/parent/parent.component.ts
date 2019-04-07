import { Component, OnInit } from '@angular/core';
import { STOCKS } from '../../mock-stocks';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  stocks = STOCKS;

  constructor() { }

  ngOnInit() {
  }

}
