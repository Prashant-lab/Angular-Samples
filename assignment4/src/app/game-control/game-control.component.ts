import { Component, OnInit, EventEmitter , Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() startGame = new EventEmitter<number>();

  int:number = 0;
  numberemitter:any;

  constructor() { }

  ngOnInit() {
  }


  onPressStart(){
      this.numberemitter = setInterval( () =>{
         this.startGame.emit(this.int);
         this.int++;
        //alert('clicked!')
      },1000)
    
  }
  onPressStop(){
    clearInterval(this.numberemitter);

  }

}
