import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { PracticeResource } from 'src/app/models/practice.resource'
import { PracticeresourceService } from 'src/app/services/practiceresource.service'

@Component({
  selector: 'app-practiceresource-edit',
  templateUrl: './practiceresource.edit.component.html',
  styleUrls: ['./practiceresource.edit.component.css']
})
export class PracticeresourceEditComponent implements OnInit {
  practiceResourceService: PracticeresourceService
  resourceTitle: string
  resourceContent: string
  resourceSkills: string
  creationDate: Date
  resourceEstimatedReadingTime: number
  practiceResource: PracticeResource | undefined
  id: any

  constructor(practiceResourceService: PracticeresourceService, private route: ActivatedRoute) {
    this.practiceResourceService = practiceResourceService
    this.resourceTitle = ""
    this.resourceContent = ""
    this.resourceSkills = ""
    this.resourceEstimatedReadingTime = 0
    this.creationDate = new Date()
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(param => {
      this.id = <number><unknown>param.get('id')
    })
    this.practiceResourceService.getById(this.id).subscribe((resource) => {
      this.practiceResource = resource
      if (this.practiceResource !== undefined) {
        this.resourceTitle = this.practiceResource.title
        this.resourceContent = this.practiceResource.content
        this.resourceSkills = this.practiceResource.requiredSkills.join(', ')
        this.resourceEstimatedReadingTime = this.practiceResource.estimatedReadingTime
      }
    })
  }

  onSubmit(): void {
    let skillsArray = this.resourceSkills?.split(',')
    if (this.resourceEstimatedReadingTime === 0) {
      this.resourceEstimatedReadingTime = 10
    }

    let editedResource: PracticeResource = {
      title: this.resourceTitle,
      content: this.resourceContent,
      requiredSkills: skillsArray,
      creationDate: this.creationDate,
      estimatedReadingTime: +this.resourceEstimatedReadingTime
    }


    console.log(this.resourceEstimatedReadingTime)
    this.practiceResourceService.putItem(editedResource, this.id).subscribe((item) => {
      editedResource = item

    }
    )
  }

}