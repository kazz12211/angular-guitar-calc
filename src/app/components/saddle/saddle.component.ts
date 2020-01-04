import { Component, OnInit } from '@angular/core';
import { GuitarCalcService } from 'src/app/services/guitar-calc.service';

@Component({
  selector: 'app-saddle',
  templateUrl: './saddle.component.html',
  styleUrls: ['./saddle.component.css']
})
export class SaddleComponent implements OnInit {

  saddlePosition: number;
  saddleHeight: number;  

  constructor(private calc: GuitarCalcService) { }

  ngOnInit() {
    this.calc.calcSaddle().subscribe(result => {
      this.saddlePosition = result[0];
      this.saddleHeight = result[1];
    });
  }

  onChangeModel(event) {
    this.calc.selectModel(this.calc.selectedModel);
    this.valueChanged();
  }

  valueChanged() {
    this.calc.calcSaddle().subscribe(result => {
      this.saddlePosition = result[0];
      this.saddleHeight = result[1];
    });
  }
}
