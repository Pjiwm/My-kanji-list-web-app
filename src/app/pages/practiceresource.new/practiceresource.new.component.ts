import { Component, OnInit } from '@angular/core'
import { PracticeResource } from 'src/app/models/practice.resource'
import { PracticeresourceService } from 'src/app/services/practiceresource.service'

@Component({
  selector: 'app-practiceresource-new',
  templateUrl: './practiceresource.new.component.html',
  styleUrls: ['./practiceresource.new.component.css']
})
export class PracticeresourceNewComponent implements OnInit {
  practiceResourceService: PracticeresourceService
  resourceTitle: string
  resourceContent: string
  resourceSkills: string
  creationDate: Date
  resourceEstimatedReadingTime: number

  constructor(practiceResourceService: PracticeresourceService) {
    this.practiceResourceService = practiceResourceService
    this.resourceTitle = ""
    this.resourceContent = ""
    this.resourceSkills = ""
    this.resourceEstimatedReadingTime = 0
    this.creationDate = new Date()
  }

  ngOnInit(): void {
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


    console.log(this.resourceEstimatedReadingTime)
    this.practiceResourceService.postItem(newResource).subscribe((item) => {
      newResource = item

    }
    )
  }

}
