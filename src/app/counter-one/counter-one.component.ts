import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-one',
  templateUrl: './counter-one.component.html',
  styleUrls: ['./counter-one.component.css']
})
export class CounterOneComponent implements OnInit {
  title: string = "Counter One";
  count: number = 0;
  numberColour = "";
  constructor() { }

  ngOnInit(): void {
  }

  increase(number: number): void {
    this.count += number;
    this.colour();
  }
  decrease(number: number): void {
    this.count -= number;
    this.colour();
  }
  reset(number: number): void {
    this.count = number;
    this.colour();
  }
  // this method will change the counter colour if the number is 
  // positive (green), negative (red), and zero (black - default colour)
  colour(){
    if(this.count > 0){
      this.numberColour="green"
    }else if(this.count < 0){
      this.numberColour="red"
    }else{
      this.numberColour=""
    }
  }
}
