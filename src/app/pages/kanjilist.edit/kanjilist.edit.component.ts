import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { KanjiList } from 'src/app/models/kanji.list'
import { KanjiListService } from 'src/app/services/kanji.list.service'
@Component({
  selector: 'app-kanjilist-edit',
  templateUrl: './kanjilist.edit.component.html',
  styleUrls: ['./kanjilist.edit.component.css']
})
export class KanjilistEditComponent implements OnInit {
  id: number
  route: ActivatedRoute
  kanjiList: KanjiList | undefined
  private kanjiListService: KanjiListService
  constructor(route: ActivatedRoute, kanjiListService: KanjiListService) {
    this.route = route
    this.kanjiListService = kanjiListService
    this.id = 0
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(param => {
      this.id = <number><unknown>param.get('id')
    })

    if (this.id !== null) {
      this.kanjiList = this.kanjiListService.getForId(this.id)
    }
  }

}
