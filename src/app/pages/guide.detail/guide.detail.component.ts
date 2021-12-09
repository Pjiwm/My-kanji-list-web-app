import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Guide } from 'src/app/models/guide'
import { KanjiList } from 'src/app/models/kanji.list'
import { GuideService } from 'src/app/services/guide.service'
import { KanjiListService } from 'src/app/services/kanji.list.service'

@Component({
  selector: 'app-guide-detail',
  templateUrl: './guide.detail.component.html',
  styleUrls: ['./guide.detail.component.css']
})
export class GuideDetailComponent implements OnInit {
  id: number
  route: ActivatedRoute
  guide: Guide | undefined
  kanjiList?: KanjiList | undefined
  kanjiListService: KanjiListService
  private guideService: GuideService
  constructor(route: ActivatedRoute, guideService: GuideService, kanjiListService: KanjiListService) {
    this.route = route
    this.guideService = guideService
    this.id = 0
    this.kanjiListService = kanjiListService

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(param => {
      this.id = <number><unknown>param.get('id')
    })
    this.guideService.getById(this.id).subscribe((guide) => {
      this.guide = guide
      this.kanjiList = guide.kanjilist
    })
    // this.guide = this.guideService.getById(this.id)
    // this.kanjiListService.getById(this.guide?.kanjiListId).subscribe((kanjilist) => {
    //   this.kanjiList = kanjilist
    // })
  }
}