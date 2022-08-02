import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter-two',
  templateUrl: './counter-two.component.html',
  styleUrls: ['./counter-two.component.css']
})
export class CounterTwoComponent implements OnInit {
  @Input() number!: number;
  @Output() numberChange = new EventEmitter<number>();
  title: string = "Counter Two ";
  numberColour: string = "";
  constructor() { }

  ngOnInit(): void {
  }

  increase(number: number): void {
    this.number += number;
    this.textColor()
  }
  decrease(number: number): void {
    this.number -= number;
    this.textColor();
  }
  reset(number: number): void {
    this.number = number;
    this.textColor();
  }

  textColor(){
    if(this.number > 0){
      this.numberColour = "green"
    }else if (this.number < 0){
      this.numberColour = "red"
    }else {
      this.numberColour = ""
    }
  }
}
