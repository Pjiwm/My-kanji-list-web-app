import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Guide } from 'src/app/models/guide'
import { GuideService } from 'src/app/services/guide.service'

@Component({
  selector: 'app-guide-detail',
  templateUrl: './guide.detail.component.html',
  styleUrls: ['./guide.detail.component.css']
})
export class GuideDetailComponent implements OnInit {
  id: number
  route: ActivatedRoute
  guide: Guide | undefined
  private guideService: GuideService
  constructor(route: ActivatedRoute, guideService: GuideService) {
    this.route = route
    this.guideService = guideService
    this.id = 0
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(param => {
      this.id = <number><unknown>param.get('id')
    })

    if (this.id !== null) {
      this.guide = this.guideService.getForId(this.id)
    }
  }
}