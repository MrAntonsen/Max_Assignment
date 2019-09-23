import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-game-controll',
  templateUrl: './game-controll.component.html',
  styleUrls: ['./game-controll.component.css']
})
export class GameControllComponent implements OnInit {


  @Output() eventCreated = new EventEmitter<{isEven: boolean, num: number}>();
  @Output() eventPaused = new EventEmitter();
  @Input() eventElement: {isEven: boolean, intervalNumber: number};
  incrNum: number = 1;
  timer;
  constructor() { }

  ngOnInit() {
  }
  
  startTimer(){
    this.timer = setInterval(() =>{
      if(this.incrNum % 2=== 0){
      this.eventCreated.emit({isEven: true, num: this.incrNum});
    }else{
      this.eventCreated.emit({isEven: false, num: this.incrNum});
      }
      this.incrNum++;
    },1000)
  }
  pauseTimer(){
    clearInterval(this.timer);
  }
}
