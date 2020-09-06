import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.scss']
})
export class LoginButtonComponent implements OnInit {
  
  @Output() submitForm = new EventEmitter<any>();
  
  constructor() { }

  ngOnInit() {
  }

}
