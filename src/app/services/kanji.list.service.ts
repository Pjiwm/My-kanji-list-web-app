import { Injectable } from '@angular/core'
import { KanjiList } from '../models/kanji.list'

@Injectable({
  providedIn: 'root'
})
export class KanjiListService {
  private kanjiLists: KanjiList[]
  constructor() {
    this.kanjiLists = [
      {
        id: 1,
        name: 'numbers',
        description: 'The characters for the numbers:\n 1-10 100, 1000, 10.000 and 100.000.000',
        kanji: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '百', '千', '万', '億'],
        tags: ['numbers', '1st grade'],
        creationDate: new Date("2019-01-16")
      },
      {
        id: 2,
        name: 'senses',
        description: 'The characters for your five senses',
        kanji: ['耳', '見', '触', '香', '味'],
        tags: ['tastes', 'different grades', 'common'],
        creationDate: new Date("2021-02-20")
      },
      {
        id: 3,
        name: 'foods',
        description: 'Some food ingredients',
        kanji: ['饂', '魚', '肉', '菜'],
        tags: ['food', 'ingredients', 'meat'],
        creationDate: new Date("2018-04-25")
      },
      {
        id: 4,
        name: 'boy name characters',
        description: 'Common characters in boy names',
        kanji: ['大', '隼', '清', '地', '男', '正'],
        tags: ['boy', 'jinmeiyō', 'jinmeiyou', '人名用漢字'],
        creationDate: new Date("2012-10-02")
      },
      {
        id: 5,
        name: 'girl name characters',
        description: 'Common characters in girl names',
        kanji: ['子', '愛', '明', '華', '女'],
        tags: ['girl', 'jinmeiyō', 'jinmeiyou', '人名用漢字'],
        creationDate: new Date("2012-10-03")
      }
    ]
  }

  setOption(id: number, value: any) {
    this.kanjiLists[id] = value
  }

  pushItem(item: KanjiList) {
    this.kanjiLists.push(item)
  }

  getForId(id: number) {
    return this.kanjiLists.find((x) => x.id = id)
  }

  getOption() {
    return this.kanjiLists
  }
}
