import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  data: any;

  constructor() { }

  ngOnInit(): void {
    this.data = JSON.parse(localStorage.getItem('currentUser')) ;
  }

}
