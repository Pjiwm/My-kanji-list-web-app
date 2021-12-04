import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  newUserName: string
  newEmail: string
  newPassword: string
  constructor() { 
    this.newUserName = ""
    this.newEmail = ""
    this.newPassword = ""
  }

  ngOnInit(): void {
  }

  onSubmit(): void {

  }

}
