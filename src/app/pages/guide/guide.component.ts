import { Component, OnInit } from '@angular/core';
import { Guide } from 'src/app/models/guide';
import { GuideService } from 'src/app/services/guide.service'

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.css']
})
export class GuideComponent implements OnInit {
  guideList: Guide[] | undefined
  private guideService: GuideService

  constructor(guideService: GuideService) {
    this.guideService = guideService
  }

  ngOnInit(): void {
    this.guideList = this.guideService.getAll()
  }

  onDelete(id: number): void {
    this.guideService.removebyId(id)
  }

}
