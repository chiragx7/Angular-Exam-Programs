import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'reactiveform';
  
  myReactiveForm = new FormGroup({

    firstName: new FormControl("", [
      Validators.required,
      Validators.minLength(5)
    ]),

    lastName: new FormControl("", [
      Validators.required,
      Validators.minLength(5)
    ]),

    address: new FormGroup({
      street: new FormControl("", [
        Validators.required,
        Validators.minLength(5),
      ]),

      city: new FormControl("", [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern('[a-zA-z]*')
      ])
    })

  });

  updateProfile() {
    this.myReactiveForm.patchValue({
      firstName: "Chirag",
      lastName: "Rajaa",
      address: {
        street: "Street 123",
        city: "Rajkot"
      }
    });

    this.myReactiveForm.markAllAsTouched();
  }

  onSubmit() {
    console.log(this.myReactiveForm.value);
  }
}
