import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  activeSession: boolean = false;

  ngOnInit(): void {
    this.activeSession = localStorage.length > 0;
  }

  getOut() {
    localStorage.clear();
    location.replace('/');
  }

}
