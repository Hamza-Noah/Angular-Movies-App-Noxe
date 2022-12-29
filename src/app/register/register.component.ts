import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms"
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  submitRegister(formInfo: FormGroup) {
    console.log(formInfo);

  }

  registerForm: FormGroup = new FormGroup({
    first_name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(8),]),
    last_name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(8),]),
    age: new FormControl(null, [Validators.required, Validators.min(16), Validators.max(8),]),
    email: new FormControl(null, [Validators.required, Validators.email, Validators.pattern(/^[A-Z][a-z]{2, 9}$/), ]),
    password: new FormControl(null),

  })

  ngOnInit(): void {
  }

}
