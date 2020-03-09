import { Component, Pipe, PipeTransform } from '@angular/core';
import { timer  } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  countDown;
  counter = 16200;
  tick = 1000;

  constructor() {
    this.countDown = timer(0, this.tick)
    .pipe(
      take(this.counter),
      map(() => --this.counter)
    );
  }

}


@Pipe({
  name: 'formatTime'
})
export class FormatTimePipe implements PipeTransform {

  transform(value: number): string {
    if (!isNaN(value)) {
      const hours = Math.floor(value / 3600);
      const minutes = Math.floor((value - (hours * 3600)) / 60);
      const seconds = value - (hours * 3600) - (minutes * 60);
      return ('0' + hours).substr(-2) + ' hours : ' 
      + ('0' + minutes).substr(-2) 
      + ' mins : ' + ('0' + seconds).substr(-2)
      + ' left ';
    }
    return;
  }
}
