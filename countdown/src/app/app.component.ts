import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Countdown Timer';

  days: number
  hours: number
  minutes: number
  seconds: number

  targetTime: number

  updateCounter() {
    // Get the current time
    const currentTime = new Date().getTime();

    // Get the difference between now and the target time
    const timeDifference = this.targetTime - currentTime;

    // Determine if counter has expired 
    if(timeDifference < 0) {
      this.days = 0;
      this.hours = 0;
      this.minutes = 0;
      this.seconds = 0;

      return;
    }
    
     // Time calculations for days, hours, minutes and seconds
    this.days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    this.hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    this.minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    this.seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Update the counter every 1 second
    setInterval(() => this.updateCounter(), 1000);
  }

  constructor() {
      // For demo purposes the target time is 24hrs 
      let nextDay = new Date();
      nextDay.setDate(nextDay.getDate()+1);
      this.targetTime = nextDay.getTime();
      
      this.updateCounter();
  }  
}
