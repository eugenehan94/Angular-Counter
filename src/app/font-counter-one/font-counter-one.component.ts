import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-font-counter-one',
  templateUrl: './font-counter-one.component.html',
  styleUrls: ['./font-counter-one.component.css']
})
export class FontCounterOneComponent implements OnInit {
  title: string = "Font Counter One"
  fontSize: number = 24;
  textColour!: string;
  constructor() { }

  ngOnInit(): void {
  }

  increase(number: number): void{
    this.fontSize += number;
    this.isNegative();
  
  }
  decrease(number: number): void{
    this.fontSize -= number;
    this.isNegative();
  }
  restore(): void {
    this.fontSize = 24;
    this.isNegative();
  }
  isNegative(): void {
    if (this.fontSize < 0){
      this.textColour = "red";
      this.fontSize = 0;
    }else{
      this.textColour = ""
    }
  }
}
