import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-font-counter-two',
  templateUrl: './font-counter-two.component.html',
  styleUrls: ['./font-counter-two.component.css']
})
export class FontCounterTwoComponent implements OnInit {
  title: string = "Font Counter Two"

  @Input() fontSize!:number;
  @Output() fontSizeChange = new EventEmitter<number>();
  fontColour!: string;
  constructor() { }

  ngOnInit(): void {
  }

  increase(number: number):void {
    this.fontSize += number;
    this.isNegative();
  }
  decrease(number: number): void {
    this.fontSize -= number;
    this.isNegative();
  }
  restore():void {
    this.fontSize = 24
    this.isNegative();
  }
  isNegative(){
    if(this.fontSize <= 0){
      this.fontSize = 0
      this.fontColour = "red"
    }else{
      this.fontColour = "";
    }
  }
}
