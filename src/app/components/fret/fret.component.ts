import { Component, OnInit } from '@angular/core';
import { GuitarCalcService } from 'src/app/services/guitar-calc.service';

@Component({
  selector: 'app-fret',
  templateUrl: './fret.component.html',
  styleUrls: ['./fret.component.css']
})
export class FretComponent implements OnInit {

  frets = [];
  constructor(private calc: GuitarCalcService) { }

  ngOnInit() {
    this.calc.calcFret().subscribe(frets => this.frets = frets);
  }

  onChangeModel(event) {
    this.calc.selectModel(this.calc.selectedModel);
    this.valueChanged();
  }

  valueChanged() {
    this.calc.calcFret().subscribe(frets => this.frets = frets);
  }
}
