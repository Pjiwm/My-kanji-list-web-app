import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { User } from '../models/user'
import { AuthService } from '../services/auth.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public isCollapsed = true
  public user: User | undefined
  loggedInUser$: Observable<User>

  constructor(private authService: AuthService) {
    this.loggedInUser$ = this.authService.getUser()

  }

  ngOnInit(): void {
    if (this.authService.isLoggedIn()) {
      this.loggedInUser$ = this.authService.getUser()
    }
  }

  isLoggedIn(): Boolean {
    const isLoggedIn = this.authService.isLoggedIn()
    if(isLoggedIn) {
      this.loggedInUser$ = this.authService.getUser()
      this.loggedInUser$.subscribe(p => this.user = p)
    }
    return isLoggedIn
  }

  onLogout(): void {
    this.authService.logout()
  }

}
