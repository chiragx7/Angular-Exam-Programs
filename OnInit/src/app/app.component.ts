import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  products:any[] = [];

  ngOnInit(): void {
    this.products = [
      {name: 'Maggie', price: 15, qty: 100},
      {name: 'Pasta', price: 35, qty: 250},
      {name: 'Noodles', price: 60, qty: 70},
    ];
  }

  title = 'OnInit';
}
