import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnInit {
  @Input() name: string;

  private counter: number = 0;

  constructor() {}

  ngOnInit() {}

  increment() {
    this.counter++;
  }

  getCounter() {
    return this.counter;
  }
}
