import { Component, OnInit } from '@angular/core'
import { AuthService } from 'src/app/services/auth.service'
import { ErrorService } from 'src/app/services/error.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userEmail: string
  userPassword: string
  errorService: ErrorService
  successfulLogin: Boolean
  constructor(private authService: AuthService, errorService: ErrorService) {
    this.userEmail = ""
    this.userPassword = ""
    this.errorService = errorService
    this.successfulLogin = true
  }

  ngOnInit(): void {
    this.errorService.setDefault()
  }

  async onSubmit(): Promise<void> {
    this.authService.login(this.userEmail, this.userPassword)
    this.successfulLogin = false
  }

}
