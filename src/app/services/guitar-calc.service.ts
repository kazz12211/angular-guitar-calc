import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuitarCalcService {
  numFrets = 22;
  jointPosition = 0;
  neckAngle = 0;
  stringHeight = 2.0;
  fretHeight = 1.3;
  fingerboardThickness = 6.0;
  saddleHeight = 0;
  saddlePosition = 0;
  numberOfStrings = 6;
  pitchAtNut = 7;
  pitchAtSaddle = 10.5;
  sideSpacing = 3.5;
  fingerboardWidthSaddle = 0.0;
  fingerboardWidthNut = 0.0;
  fingerboardLength = 0.0;
  tab = 0;
  frets = [];
  models = [
    {name:'', scale:635},
    {name:'Gibson LesPaul (628mm)', scale:628},
    {name:'Gibson SG (628mm)', scale:628},
    {name:'Gibson ES-335 (628mm)', scale:628},
    {name:'PRS (635mm)', scale:635},
    {name:'Fender Stratocaster (648mm)', scale:648},
    {name:'Fender Telecaster (648mm)', scale:648},
    {name:'Fender Jazz Master (648mm)', scale:648},
    {name:'Fender Mustang (609mm)', scale:609},
    {name:'Martin OOO (632mm)', scale:632},
    {name:'Martin OM (645mm)', scale:645},
    {name:'Classical Guitar (650mm)', scale:650}
  ];
  selectedModel = this.models[0];
  scale = this.selectedModel.scale;

  constructor() { }

  selectModel(model) {
    this.selectedModel = model;
    this.scale = model.scale;
  }

  calcFret() {
    let f = this.scale;
    let lastPos = 0.0;
    const frets = [];
    for (var i = 0; i < this.numFrets + 1; i++) {
      var pos = f / 17.817;
      var p = {};
      f -= pos;
      p["fret"] = i+1;
      p["positionFromNut"] = lastPos + pos;
      p["positionFromFret"] = pos;
      frets.push(p);
      lastPos += pos;
    }
    this.frets = frets;
    return of(this.frets);
  }

  calcSaddle() {
    let height = (this.scale - this.jointPosition) * Math.sin(this.neckAngle * Math.PI/ 180.0);
    let strHeight = (this.stringHeight - 0.1) * 2.0 + this.fretHeight;
    this.saddlePosition = (this.scale - this.jointPosition) * Math.cos(this.neckAngle * Math.PI / 180.0);
    this.saddleHeight = height + strHeight + this.fingerboardThickness;
    return of([this.saddlePosition, this.saddleHeight]);
  }

  calcFingerboard() {
    this.fingerboardLength = (this.scale - this.scale / Math.pow(2.0, (this.numFrets + 1.0)/12.0));
    this.fingerboardWidthNut = this.pitchAtNut * (this.numberOfStrings - 1) + this.sideSpacing * 2;
    let w = this.pitchAtSaddle * (this.numberOfStrings - 1) + this.sideSpacing * 2;
    this.fingerboardWidthSaddle = this.fingerboardWidthNut + (w - this.fingerboardWidthNut) * (this.fingerboardLength / this.scale);
    return of([this.fingerboardLength, this.fingerboardThickness, this.fingerboardWidthNut, this.fingerboardWidthSaddle]);
  }
}
