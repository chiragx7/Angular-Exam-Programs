import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloworldService } from './helloworld.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [HelloworldService]
})
export class AppComponent {
  title = 'service';
  message = '';

  constructor(private myService: HelloworldService) {
    this.message = myService.printHelloWorld();
  }
}
