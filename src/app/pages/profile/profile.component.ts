import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'
import { User } from 'src/app/models/user'
import { AuthService } from 'src/app/services/auth.service'
import { GuideService } from 'src/app/services/guide.service'
import { KanjiListService } from 'src/app/services/kanji.list.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  kanjiListService: KanjiListService
  guideService: GuideService
  authService: AuthService
  // TODO get user in here
  // profileUser$: Observable<User>

  constructor(guideSerivce: GuideService, kanjiListService: KanjiListService, authService: AuthService) {
    this.guideService = guideSerivce
    this.kanjiListService = kanjiListService
    this.authService = authService
    // this.profileUser$ = authService.get
   }

  ngOnInit(): void {
  }

}
