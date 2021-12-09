import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { Guide } from 'src/app/models/guide'
import { User } from 'src/app/models/user'
import { AuthService } from 'src/app/services/auth.service'
import { GuideService } from 'src/app/services/guide.service'

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.css']
})
export class GuideComponent implements OnInit {
  guideList: Guide[] | undefined
  user: User | undefined
  loggedInUser$: Observable<User>
  private guideService: GuideService
  private authService: AuthService

  constructor(guideService: GuideService, authService: AuthService) {
    this.guideService = guideService
    this.authService = authService
    this.loggedInUser$ = this.authService.getUser()
    this.guideList = []
  }

  ngOnInit(): void {
    // this.guideList = this.guideService.getAll()
    this.guideService.getAll().subscribe((guides) => {
      this.guideList = guides
    })

  }

  isLoggedIn(): Boolean {
    const isLoggedIn = this.authService.isLoggedIn()
    if (isLoggedIn) {
      this.loggedInUser$ = this.authService.getUser()
      this.loggedInUser$.subscribe(p => this.user = p)
    }
    return isLoggedIn
  }

  onLogout(): void {
    this.authService.logout()
  }

}
