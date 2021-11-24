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
  title: string
  content: string
  tags: string
  creationDate: Date
  listId: number

  constructor(guideService: GuideService) {
    this.guideService = guideService
    this.title = ""
    this.content = ""
    this.tags = ""
    this.listId = this.guideService.getOption().length + 1
    this.creationDate = new Date()
  }

  ngOnInit(): void {

  }

  onSubmit(): void {
    let tagsArray = this.tags?.split(',')
    let newGuide: Guide = {
      id: this.listId,
      title: this.title,
      content: this.content,
      tags: tagsArray,
      creationDate: this.creationDate
    }
    this.guideService.pushItem(newGuide)
  }

}
