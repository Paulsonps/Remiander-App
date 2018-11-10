import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import * as app from 'tns-core-modules/application';
import { RadialScale, RadialBarIndicator } from 'nativescript-ui-gauge';

@Component({
  selector: 'Home',
  moduleId: module.id,
  templateUrl: './home.component.html'
})
export class HomeComponent implements AfterViewInit {
  timeLeft: number = 60;
  interval;
  constructor() {}

  ngAfterViewInit() {}

  startTimer() {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 60;
      }
    }, 1000);
  }

  pauseTimer() {
    clearInterval(this.interval);
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
  }
}
