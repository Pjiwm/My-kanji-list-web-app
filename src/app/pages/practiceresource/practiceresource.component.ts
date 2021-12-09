import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'
import { PracticeResource } from 'src/app/models/practice.resource'
import { User } from 'src/app/models/user'
import { AuthService } from 'src/app/services/auth.service'
import { PracticeresourceService } from 'src/app/services/practiceresource.service'

@Component({
  selector: 'app-practiceresource',
  templateUrl: './practiceresource.component.html',
  styleUrls: ['./practiceresource.component.css']
})
export class PracticeresourceComponent implements OnInit {
  practiceResources: PracticeResource[] | undefined
  private practiceResourceService: PracticeresourceService
  private authService: AuthService
  user: User | undefined
  loggedInUser$: Observable<User>


  constructor(practiceResourceService: PracticeresourceService, authService: AuthService) {
    this.practiceResourceService = practiceResourceService
    this.authService = authService
    this.loggedInUser$ = this.authService.getUser()
    this.practiceResources = []
  }

  ngOnInit(): void {
    this.practiceResourceService.getAll().subscribe((resources) =>
    {
      this.practiceResources = resources
    })
  }

  onDelete(id: number): void {
    this.practiceResourceService.removebyId(id).subscribe((item) => item = item)
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
