import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { Guide } from 'src/app/models/guide'
import { KanjiList } from 'src/app/models/kanji.list'
import { PracticeResource } from 'src/app/models/practice.resource'
import { User } from 'src/app/models/user'
import { AuthService } from 'src/app/services/auth.service'
import { GuideService } from 'src/app/services/guide.service'
import { KanjiListService } from 'src/app/services/kanji.list.service'
import { PracticeresourceService } from 'src/app/services/practiceresource.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  kanjiLists: KanjiList[] | undefined
  guides: Guide[] | undefined
  practiceResources: PracticeResource[] | undefined
  user: User | undefined
  loggedInUser$: Observable<User>
  tableState: string
  userName: string | null = localStorage.getItem("user_name")

  constructor(private guideSerivce: GuideService,
    private kanjiListService: KanjiListService,
    private practiceResourceService: PracticeresourceService,
    private authService: AuthService) {

    this.loggedInUser$ = this.authService.getUser()
    this.kanjiLists = []
    this.guides = []
    this.practiceResources = []
    this.tableState = "kanjilists"

  }

  ngOnInit(): void {
    this.kanjiListService.getFromUser(localStorage.getItem('user_id')).subscribe((kanjilists) => {
      this.kanjiLists = kanjilists
    })
    this.guideSerivce.getFromUser(localStorage.getItem('user_id')).subscribe((guides) => {
      this.guides = guides
    })
    this.practiceResourceService.getFromUser(localStorage.getItem('user_id')).subscribe((resources) => {
      this.practiceResources = resources
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

  onDeleteKanjiList(id: any): void {
    this.kanjiListService.removebyId(id).subscribe((item) => item = item)
  }

  onDeleteGuide(id: any): void {
    this.guideSerivce.removebyId(id).subscribe((item) => item = item)
  }

  onDeletePracticeResource(id: any): void {
    this.practiceResourceService.removebyId(id).subscribe((item) => item = item)
  }

}
