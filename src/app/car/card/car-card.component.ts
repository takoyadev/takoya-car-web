import {Component, Input, OnInit} from '@angular/core';
import {Car} from "../car";

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.scss']
})
export class CarCardComponent implements OnInit {


  @Input() car: Car | undefined;

  constructor(
  ) { }

  ngOnInit(): void {
    console.log(this.car);
  }

}
