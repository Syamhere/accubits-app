import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {

  @Input() email: FormGroup;
  @Input() submitted;  

  constructor() { }

  ngOnInit() {
  }

}
