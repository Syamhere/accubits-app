import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnInit {

  @Input() password: FormGroup;
  @Input() submitted;  

  constructor() { }

  ngOnInit() {
  }

}
