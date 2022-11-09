import { Component, OnInit } from '@angular/core';
import { faTv } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  faTv = faTv;

  constructor() { }

  ngOnInit(): void {
  }

}
