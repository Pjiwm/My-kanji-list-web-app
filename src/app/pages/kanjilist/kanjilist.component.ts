import { Component, OnInit } from '@angular/core'
import { KanjiList } from 'src/app/models/kanji.list'
import { KanjiListService } from 'src/app/services/kanji.list.service'

@Component({
  selector: 'app-kanjilist',
  templateUrl: './kanjilist.component.html',
  styleUrls: ['./kanjilist.component.css']
})
export class KanjilistComponent implements OnInit {
  kanjiLists: KanjiList[] | undefined
  private kanjiListService: KanjiListService

  constructor(kanjiListService: KanjiListService) {
    this.kanjiListService = kanjiListService
  }

  ngOnInit(): void {
    this.kanjiLists = this.kanjiListService.getAll()
  }

}