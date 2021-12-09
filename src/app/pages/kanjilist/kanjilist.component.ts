import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { KanjiList } from 'src/app/models/kanji.list'
import { User } from 'src/app/models/user'
import { AuthService } from 'src/app/services/auth.service'
import { KanjiListService } from 'src/app/services/kanji.list.service'

@Component({
  selector: 'app-kanjilist',
  templateUrl: './kanjilist.component.html',
  styleUrls: ['./kanjilist.component.css']
})
export class KanjilistComponent implements OnInit {
  kanjiLists: KanjiList[]
  private kanjiListService: KanjiListService
  private authService: AuthService
  user: User | undefined
  loggedInUser$: Observable<User>


  constructor(kanjiListService: KanjiListService, authService: AuthService) {
    this.kanjiListService = kanjiListService
    this.authService = authService
    this.loggedInUser$ = this.authService.getUser()
    this.kanjiLists = []
  }

  ngOnInit(): void {
    this.kanjiListService.getAll().subscribe((kanjilists) =>
    {
      this.kanjiLists = kanjilists
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