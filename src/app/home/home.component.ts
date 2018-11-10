import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef
} from '@angular/core';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import * as app from 'tns-core-modules/application';
import { RadialScale, RadialBarIndicator } from 'nativescript-ui-gauge';
import { Time } from '../model/time.model';

@Component({
  selector: 'Home',
  moduleId: module.id,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  // @ViewChild('foobarElement') foobar: ElementRef;
  time: Time;
  timeLeft: number = 60;
  interval;
  maxTime: number;
  timeMax: number;
  constructor() {
    // console.log('h1');
    this.time = new Time();
    // this.time.setTime = '100';
    // this.time.setTask = 'My init task';
  }

  ngAfterViewInit() {}

  startTimer() {
    this.maxTime = this.time.setTime;
    console.log('got time', this.time.setTime);
    console.log('got task', this.time.setTask);
    this.timeLeft = 0;
    this.timeMax = 0;
    console.log('Came 2 start timer');
    this.interval = setInterval(() => {
      if (this.timeLeft < this.maxTime) {
        this.timeLeft++;
        this.timeMax = (100 / this.maxTime) * this.timeLeft;
        console.log('this.timeMax' + this.timeMax);
      } else {
        console.log('came 2 else part' + this.timeMax);
        return;
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
