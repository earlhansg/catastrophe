import { Component, OnInit, OnDestroy, Pipe, PipeTransform } from '@angular/core';
import { Observable, Subscription, interval, timer  } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  countDown;
  counter = 14400;
  tick = 1000;

  constructor() {
    this.countDown = timer(0, this.tick)
    .pipe(
      take(this.counter),
      map(() => --this.counter)
    );
  }

  ngOnInit() {}
}


@Pipe({
  name: 'formatTime'
})
export class FormatTimePipe implements PipeTransform {

  transform(value: number): string {
    const minutes: number = Math.floor(value / 60);
    return ('00' + minutes).slice(-2) + ':' + ('00' + Math.floor(value - minutes * 60)).slice(-2);
}
}
