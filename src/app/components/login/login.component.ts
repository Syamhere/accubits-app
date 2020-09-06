import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  isSubmitted = false;


  constructor(
    private form: FormBuilder,
    private route: Router,
    ) { }

  ngOnInit() {
    this.loginForm = this.form.group({      
      email: this.form.group({ 
        email: ['', [Validators.required, Validators.email]]
      }),
      password: this.form.group({ 
        password: ['', Validators.required]
      })
    })
  }

  submitForm(){
    if(this.loginForm.valid){
      this.isSubmitted = true;
      localStorage.setItem('isLoggined', 'true');
      this.route.navigate(['/']);
    }
    
  }

}
