import { Component, OnInit } from '@angular/core'
import { KanjiListService } from 'src/app/services/kanji.list.service'
import { KanjiList } from 'src/app/models/kanji.list'

@Component({
  selector: 'app-kanjilist.new',
  templateUrl: './kanjilist.new.component.html',
  styleUrls: ['./kanjilist.new.component.css']
})
export class KanjilistNewComponent implements OnInit {
  kanjiListService: KanjiListService
  listName: string
  listDescription: string
  listTags: string
  listKanji: string
  listDate: Date
  listId: number

  constructor(kanjiListService: KanjiListService) {
    this.kanjiListService = kanjiListService
    this.listName = ""
    this.listDescription = ""
    this.listTags = ""
    this.listKanji = ""
    this.listId = this.kanjiListService.getNewId()
    this.listDate = new Date()
  }

  ngOnInit(): void {

  }

  onSubmit(): void {
    let tagsArray = this.listTags?.split(',')
    let kanjiArray = this.listKanji?.split('')
    let newKanjiList: KanjiList = {
      id: this.listId,
      name: this.listName,
      description: this.listDescription,
      tags: tagsArray,
      kanji: kanjiArray,
      creationDate: this.listDate
    }
    this.kanjiListService.postItem(newKanjiList)
    console.log('added kanji list')
  }

}
