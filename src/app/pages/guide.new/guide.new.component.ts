import { Component, OnInit } from '@angular/core'
import { Guide } from 'src/app/models/guide'
import { GuideService } from 'src/app/services/guide.service'

@Component({
  selector: 'app-guide-new',
  templateUrl: './guide.new.component.html',
  styleUrls: ['./guide.new.component.css']
})
export class GuideNewComponent implements OnInit {
  guideService: GuideService
  guideTitle: string
  guideContent: string
  guideTags: string
  creationDate: Date
  guideId: number

  constructor(guideService: GuideService) {
    this.guideService = guideService
    this.guideTitle = ""
    this.guideContent = ""
    this.guideTags = ""
    this.guideId = this.guideService.getNewId()
    this.creationDate = new Date()
  }

  ngOnInit(): void {

  }

  onSubmit(): void {
    let tagsArray = this.guideTags?.split(',')
    let newGuide: Guide = {
      id: this.guideId,
      title: this.guideTitle,
      content: this.guideContent,
      tags: tagsArray,
      creationDate: this.creationDate
    }
    this.guideService.postItem(newGuide)
  }

}
