import { Component, OnInit } from '@angular/core';
import { GuitarCalcService } from 'src/app/services/guitar-calc.service';

@Component({
  selector: 'app-fingerboard',
  templateUrl: './fingerboard.component.html',
  styleUrls: ['./fingerboard.component.css']
})
export class FingerboardComponent implements OnInit {

  fingerboardLength: number;
  fingerboardThickness: number;
  fingerboardWidthNut: number;
  fingerboardWidthSaddle: number;

  constructor(public calc: GuitarCalcService) { }

  ngOnInit() {
    this.calc.calcFingerboard().subscribe(result => {
      this.fingerboardLength = result[0];
      this.fingerboardThickness = result[1];
      this.fingerboardWidthNut = result[2];
      this.fingerboardWidthSaddle = result[3];
    });
  }

  onChangeModel(event) {
    this.calc.selectModel(this.calc.selectedModel);
    this.valueChanged();
  }

  valueChanged() {
    this.calc.calcFingerboard().subscribe(result => {
      this.fingerboardLength = result[0];
      this.fingerboardThickness = result[1];
      this.fingerboardWidthNut = result[2];
      this.fingerboardWidthSaddle = result[3];
    });
  }

}
