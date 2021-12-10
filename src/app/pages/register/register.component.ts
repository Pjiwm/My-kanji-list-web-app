import { Component, OnInit } from '@angular/core'
import { AuthService } from 'src/app/services/auth.service'
import { ErrorService } from 'src/app/services/error.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  newUserName: string
  newEmail: string
  newPassword: string
  successfulLogin: Boolean
  constructor(private authService: AuthService, private errorService: ErrorService) {
    this.newUserName = ""
    this.newEmail = ""
    this.newPassword = ""
    this.successfulLogin = true
  }

  ngOnInit(): void {
    this.errorService.setDefault()
  }

  async onSubmit(): Promise<void> {
    this.authService.register(this.newEmail, this.newPassword, this.newUserName)
    this.successfulLogin = false
  }

}