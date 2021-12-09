import { Component, OnInit } from '@angular/core'
import { KanjiList } from 'src/app/models/kanji.list'
import { PracticeResource } from 'src/app/models/practice.resource'
import { KanjiListService } from 'src/app/services/kanji.list.service'
import { PracticeresourceService } from 'src/app/services/practiceresource.service'

@Component({
  selector: 'app-practiceresource-new',
  templateUrl: './practiceresource.new.component.html',
  styleUrls: ['./practiceresource.new.component.css']
})
export class PracticeresourceNewComponent implements OnInit {
  practiceResourceService: PracticeresourceService
  kanjiListService: KanjiListService
  resourceTitle: string
  resourceContent: string
  resourceSkills: string
  creationDate: Date
  resourceEstimatedReadingTime: number
  kanjiListId?: string
  kanjiLists: KanjiList[]

  constructor(practiceResourceService: PracticeresourceService, kanjiListService: KanjiListService) {
    this.practiceResourceService = practiceResourceService
    this.kanjiListService = kanjiListService
    this.resourceTitle = ""
    this.resourceContent = ""
    this.resourceSkills = ""
    this.resourceEstimatedReadingTime = 0
    this.creationDate = new Date()
    this.kanjiLists = []

  }

  ngOnInit(): void {
    this.kanjiListService.getAll().subscribe((kanjiLists) => {
      this.kanjiLists = kanjiLists
    })
  }

  onSubmit(): void {
    let skillsArray = this.resourceSkills?.split(',')
    if (this.resourceEstimatedReadingTime === 0) {
      this.resourceEstimatedReadingTime = 10
    }

    let newResource: PracticeResource = {
      title: this.resourceTitle,
      content: this.resourceContent,
      requiredSkills: skillsArray,
      creationDate: this.creationDate,
      estimatedReadingTime: +this.resourceEstimatedReadingTime
    }
    if (this.kanjiListId !== undefined) {
      newResource.kanjilist = this.kanjiListId
    }

    this.practiceResourceService.postItem(newResource).subscribe((item) => {
      newResource = item
    })
  }

}
