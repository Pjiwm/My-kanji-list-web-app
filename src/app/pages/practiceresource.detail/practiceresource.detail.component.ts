import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { PracticeResource } from 'src/app/models/practice.resource'
import { PracticeresourceService } from 'src/app/services/practiceresource.service'

@Component({
  selector: 'app-practiceresource-detail',
  templateUrl: './practiceresource.detail.component.html',
  styleUrls: ['./practiceresource.detail.component.css']
})
export class PracticeresourceDetailComponent implements OnInit {
  id: number
  route: ActivatedRoute
  practiceResource: PracticeResource | undefined
  skillsString: String | undefined
  private practiceResourceService: PracticeresourceService
  constructor(route: ActivatedRoute, practiceResourceService: PracticeresourceService) {
    this.route = route
    this.practiceResourceService = practiceResourceService
    this.id = 0
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(param => {
      this.id = <number><unknown>param.get('id')
    })
    this.practiceResourceService.getById(this.id).subscribe((resource) => {
      this.practiceResource = resource
      this.skillsString = resource.requiredSkills.join(', ')
    })
  }
}