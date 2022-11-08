import { Component, OnInit } from '@angular/core';
import { trigger, animate, style, transition } from '@angular/animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations:[
    trigger("openClose",[
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('500ms', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class LoginComponent implements OnInit {

  public _isLoading: Boolean = false;

  fLogin : FormGroup = this.fb.group({
    username: this.fb.control("",[
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20)
    ]),
    password: this.fb.control("",[
      Validators.required,
      Validators.minLength(3)
    ])
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    setTimeout(() => {
      this._isLoading = false;
    }, 5000);
  }

  validar(){
    console.log("Prueba");
  }
}
