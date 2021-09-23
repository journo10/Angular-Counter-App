import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnInit {
  counterNumber: number = 0;
  constructor() {}

  ngOnInit(): void {}
  //Sıfırla
  sifirlaBtn() {
    this.counterNumber = 0;
  }

  //Artır
  artirBtn() {
    this.counterNumber = this.counterNumber + 1;
  }

  //Azalt
  azaltBtn() {
    this.counterNumber = this.counterNumber - 1;
  }
}
