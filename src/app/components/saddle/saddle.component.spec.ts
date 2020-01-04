import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaddleComponent } from './saddle.component';

describe('SaddleComponent', () => {
  let component: SaddleComponent;
  let fixture: ComponentFixture<SaddleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaddleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaddleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
