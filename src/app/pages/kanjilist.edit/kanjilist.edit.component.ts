import { Component, OnInit } from '@angular/core'
import { NgModel } from '@angular/forms'
import { ActivatedRoute } from '@angular/router'
import { KanjiList } from 'src/app/models/kanji.list'
import { KanjiListService } from 'src/app/services/kanji.list.service'
//@ts-ignore
import Kanji from 'kanji.js'

@Component({
  selector: 'app-kanjilist-edit',
  templateUrl: './kanjilist.edit.component.html',
  styleUrls: ['./kanjilist.edit.component.css']
})
export class KanjilistEditComponent implements OnInit {
  id: number
  route: ActivatedRoute
  kanjiList: KanjiList | undefined

  listName: string
  listDescription: string
  listTags: string
  listKanji: string
  listDate: Date

  private kanjiListService: KanjiListService
  constructor(route: ActivatedRoute, kanjiListService: KanjiListService) {
    this.route = route
    this.kanjiListService = kanjiListService
    this.id = 0
    this.listDescription = ""
    this.listName = ""
    this.listTags = ""
    this.listKanji = ""
    this.listDate = new Date

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(param => {
      this.id = <number><unknown>param.get('id')
    })

    // this.kanjiList = this.kanjiListService.getById(this.id)
    this.kanjiListService.getById(this.id).subscribe((kanjiList) => {
      this.kanjiList = kanjiList
      if (this.kanjiList !== undefined) {
        this.listTags = this.tagArrayToString(this.kanjiList.tags)
        this.listKanji = this.kanjiArrayToString(this.kanjiList.kanji)
        this.listDate = this.kanjiList.creationDate
        this.listDescription = this.kanjiList.description
        this.listName = this.kanjiList.name
      }
    })

  }
  /**
   * We want to get the tags array as a string so it can be displayed in a form field.
   * We iterate over it and add comma's after each word just how it was filled in when the user made a new list.
   * @param tags - the tags from a kanji list we want to iterate over
   * @returns - a string of all tags in the array seperated by comma and space
   */
  private tagArrayToString(tags: string[]): string {
    let returnString = ""
    for (let i = 0; i < tags.length; i++) {
      returnString += tags[i]
      if (i !== tags.length - 1) {
        returnString += ", "
      }
      console.log(i + ' ' + returnString)
    }
    return returnString
  }

  /**
   * We want to get the kanji array as a string so it can be displayed in a form field.
   * By iterating over it we can get a long string of every single kanji character in the array with no spaces or comma's.
   * @param kanji - the array of kanji characters 
   * @returns - a string of all characters in the array
   */
  private kanjiArrayToString(kanji: string[]): string {
    let returnString = ""
    kanji.forEach((singleKanji) => {
      returnString += singleKanji
    })
    return returnString
  }

  onSubmit(): void {
    let tagsArray = this.listTags?.split(',')
    let kanjiArray = this.listKanji?.split('')

    let newKanjiList: KanjiList = {
      id: this.id,
      name: this.listName,
      description: this.listDescription,
      tags: tagsArray,
      kanji: kanjiArray,
      creationDate: this.listDate
    }
    // this.kanjiListService.putItem(newKanjiList)
    this.kanjiListService.putItem(newKanjiList, this.id).subscribe((item) => newKanjiList = item)
  }

  incorrectKanjiValidator(model: NgModel) {
    if (model.value === null) {
      return false
    }
    const text = model.value
    for (let i = 0; i < text.length; i++) {
      if (Kanji.getDetails(text[i]) === null) {
        return true
      }
    }
    return false
  }

}
