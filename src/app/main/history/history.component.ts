import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  history: any;

  constructor() { }

  ngOnInit(): void {
    this.history =  JSON.parse(localStorage.getItem("test_history"));
  }
   // Navigate to source code
   navigateToSource() {
    window.location.href = "https://github.com/femithz/Systemspecs_test";
  } 
}
