import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  eventList = [{isEven: true, intervalNumber: 0 }];

  onEventAdded(eventData: {isEven: boolean, num: number}){
      this.eventList.push({
        isEven: eventData.isEven,
        intervalNumber: eventData.num 
      });  
  }

  onEventPaused(){
    
  }
}