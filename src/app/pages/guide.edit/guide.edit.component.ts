import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Guide } from 'src/app/models/guide'
import { KanjiList } from 'src/app/models/kanji.list'
import { GuideService } from 'src/app/services/guide.service'
import { KanjiListService } from 'src/app/services/kanji.list.service'

@Component({
  selector: 'app-guide-edit',
  templateUrl: './guide.edit.component.html',
  styleUrls: ['./guide.edit.component.css']
})
export class GuideEditComponent implements OnInit {
  id: number
  route: ActivatedRoute
  guide: Guide | undefined
  kanjiListService: KanjiListService

  guideTitle: string
  guideContent: string
  guideTags: string
  creationDate: Date
  kanjiLists: KanjiList[] | undefined
  kanjiList: KanjiList | undefined
  kanjiListId?: string

  private guideService: GuideService
  constructor(route: ActivatedRoute, guideService: GuideService, kanjiListService: KanjiListService) {
    this.route = route
    this.guideService = guideService
    this.id = 0
    this.guideTitle = ""
    this.guideContent = ""
    this.creationDate = new Date
    this.guideTags = ""
    this.kanjiListService = kanjiListService
    this.kanjiLists = []
    // this.kanjiLists = kanjiListService.getAll()
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(param => {
      this.id = <number><unknown>param.get('id')
      this.guideService.getById(this.id).subscribe((guide) => {
        this.guide = guide
        this.guideTitle = guide.title
        this.guideContent = guide.content
        this.creationDate = guide.creationDate
        this.guideTags = this.tagArrayToString(guide.tags)
        this.kanjiList = guide.kanjilist
      })
      this.kanjiListService.getAll().subscribe((kanjilists) => {
        this.kanjiLists = kanjilists
      })

      if (this.guide !== undefined) {
        this.guideTags = this.tagArrayToString(this.guide.tags)
        this.guideTitle = this.guide.title
        this.guideContent = this.guide.content
      }

    })
  }

  /**
 * We want to get the tags array as a string so it can be displayed in a form field.
 * We iterate over it and add comma's after each word just how it was filled in when the user made a new list.
 * @param tags - the tags from a kanji list we want to iterate over
 * @returns - a string of all tags in the array seperated by comma and space
 */
  private tagArrayToString(tags: string[]): string {
    let returnString = ""
    for (let i = 0; i < tags.length; i++) {
      returnString += tags[i]
      if (i !== tags.length - 1) {
        returnString += ", "
      }
    }
    return returnString
  }

  onSubmit(): void {
    let tagsArray = this.guideTags?.split(',')

    let newGuide: any = {
      id: this.id,
      title: this.guideTitle,
      content: this.guideContent,
      tags: tagsArray,
      creationDate: this.creationDate,


    }
    if (this.kanjiListId !== undefined) {
        newGuide.kanjilist = this.kanjiListId
    }
    // this.guideService.putItem(newGuide)
    this.guideService.putItem(newGuide, this.id).subscribe((item) => {newGuide = item
      if (this.kanjiListId !== undefined) {
        newGuide.kanjilist = this.kanjiListId
      }
      console.log(newGuide.kanjilist)
    })
  }
}
