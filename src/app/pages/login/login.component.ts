import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userEmail: string
  userPassword: string
  constructor() { 
    this.userEmail = ""
    this.userPassword = ""
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    
  }

}
