import { CurrencyPipe, DatePipe, JsonPipe, LowerCasePipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UpperCasePipe, LowerCasePipe, CurrencyPipe, JsonPipe, SlicePipe, DatePipe, TitleCasePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pipes';
  name: string = 'Chirag';
  sliceData = 'Hello World';
  salary: number = 70000;
  jsonData: any = {'name': 'Chirag', 'course': 'MCA', 'age': 22};
  today_date = Date();
}
