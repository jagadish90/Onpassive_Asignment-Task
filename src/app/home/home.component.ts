import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data: any;

  constructor() { }

  ngOnInit(): void {
    this.data = JSON.parse(localStorage.getItem('currentUser')) ;
    console.log(this.data);
  }

}
