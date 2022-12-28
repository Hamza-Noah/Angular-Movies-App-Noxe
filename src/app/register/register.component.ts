import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from "@angular/forms"
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor() { }
  
  submitRegister(){

  }
  
  registerForm: FormGroup = new FormGroup({
    first_name: new FormControl(null),
    last_name: new FormControl(null),
    age: new FormControl(null),
    email: new FormControl(null),
    password: new FormControl(null),

  })

  ngOnInit(): void {
  }

}
