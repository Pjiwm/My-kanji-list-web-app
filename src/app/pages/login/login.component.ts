import { Component, OnInit } from '@angular/core'
import { AuthService } from 'src/app/services/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userEmail: string
  userPassword: string
  constructor(private authService: AuthService) {
    this.userEmail = ""
    this.userPassword = ""
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.authService.login(this.userEmail, this.userPassword)
  }

}
