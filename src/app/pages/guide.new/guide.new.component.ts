import { Component, OnInit } from '@angular/core'
import { Guide } from 'src/app/models/guide'
import { KanjiList } from 'src/app/models/kanji.list'
import { GuideService } from 'src/app/services/guide.service'
import { KanjiListService } from 'src/app/services/kanji.list.service'

@Component({
  selector: 'app-guide-new',
  templateUrl: './guide.new.component.html',
  styleUrls: ['./guide.new.component.css']
})
export class GuideNewComponent implements OnInit {
  guideService: GuideService
  kanjiListService: KanjiListService
  guideTitle: string
  guideContent: string
  guideTags: string
  creationDate: Date
  guideId: number
  kanjiListId?: string
  kanjiLists: KanjiList[]

  constructor(guideService: GuideService, kanjiListService: KanjiListService) {
    this.guideService = guideService
    this.kanjiListService = kanjiListService
    this.guideTitle = ""
    this.guideContent = ""
    this.guideTags = ""
    this.guideId = this.guideService.getNewId()
    this.creationDate = new Date()
    this.kanjiLists = []
  }

  ngOnInit(): void {
    this.kanjiListService.getAll().subscribe((kanjilists) => {
      this.kanjiLists = kanjilists
    })
  }

  onSubmit(): void {
    let tagsArray = this.guideTags?.split(',')
    let newGuide: Guide = {
      id: this.guideId,
      title: this.guideTitle,
      content: this.guideContent,
      tags: tagsArray,
      creationDate: this.creationDate,
    }
    if (this.kanjiListId !== undefined) {
      newGuide.kanjilist = this.kanjiListId
    }

    this.guideService.postItem(newGuide).subscribe((item) => {
      newGuide = item
    })
  }

}
