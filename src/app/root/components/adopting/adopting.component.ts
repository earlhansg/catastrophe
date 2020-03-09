import { Component } from '@angular/core';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-adopting',
  templateUrl: './adopting.component.html',
  styleUrls: ['./adopting.component.scss']
})
export class AdoptingComponent {
  faCheckCircle = faCheckCircle;
}
