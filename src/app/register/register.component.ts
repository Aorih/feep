import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  fRegister: FormGroup = this.fb.group({
    name: this.fb.control("",[
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20)
    ]),
    surname: this.fb.control("",[
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(30)
    ]),
    email: this.fb.control("",[
      Validators.required,
      Validators.email
    ]),
    username: this.fb.control("",[
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(15)
    ]),
    password: this.fb.control("",[
      Validators.required,
      Validators.minLength(3)
    ])
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  register(){
    
  }
}
