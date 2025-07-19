import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import{ChatappAngular} from '../../../chatapp-angular/src/public-api';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ChatappAngular],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('demo');


}
