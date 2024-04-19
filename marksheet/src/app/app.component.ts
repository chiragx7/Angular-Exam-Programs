import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'marksheet';

  student_details: any = [
    {rollno: 1022, name: 'Chirag', android: 33, angular: 33, dsa: 33},
    {rollno: 1023, name: 'Mihin', android: 34, angular: 20, dsa: 38},
    {rollno: 1015, name: 'Gaurang', android: 25, angular: 30, dsa: 70},
    {rollno: 1035, name: 'Nandini', android: 92, angular: 95, dsa: 90},
    {rollno: 1036, name: 'Heli', android: 95, angular: 90, dsa: 89},
  ];
}
