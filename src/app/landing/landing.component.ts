import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  backgroundImageSrc: String = '../assets/journal.jpg';

  constructor() { }

  ngOnInit() {
  }

}
