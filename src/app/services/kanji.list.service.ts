import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { Observable } from 'rxjs'
import { KanjiList } from '../models/kanji.list'

@Injectable({
  providedIn: 'root'
})
export class KanjiListService {
  kanjiLists: KanjiList[]
  baseUrl: string = 'https://mykanjilist-backend.herokuapp.com/api'
  httpOptions: any = {
    'Content-Type': 'application/json',
  }

  constructor(private http: HttpClient, private router: Router) {
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
      },
      {
        id: 6,
        name: 'XL list',
        description: 'A big list with the same character for demonstration purposes',
        kanji: ['上', '重', '重', '重', '重', '重', '重', '重', '重', '重', '重', '重', '重', '重',
          '重', '重', '重', '重', '重', '重', '重', '重', '重', '重', '重', '重', '重', '重', '重',
          '重', '重', '重', '重', '重', '重', '重', '重', '重', '重', '重', '重', '重', '重', '重',
          '重', '重', '重', '重', '重', '重', '重', '重', '重', '重', '重', '重', '重', '重', '重',],
        tags: ['girl', 'jinmeiyō', 'jinmeiyou', '人名用漢字'],
        creationDate: new Date("2012-10-03")
      }
    ]
  }



  postItem(item: KanjiList):Observable<KanjiList> {
    return this.http.post<any>(`${this.baseUrl}/kanjilist/`, item)
  }

  putItem(item: KanjiList) {
    const index = this.kanjiLists.findIndex((p) => p.id == item.id)
    this.kanjiLists[index] = item
  }

  getById(id?: number) {
    // return this.kanjiLists.find((p) => p.id == id)
    return this.http.get<KanjiList>(`${this.baseUrl}/kanjilist/${id}`)
  }

  removebyId(id: number) {
    const index = this.kanjiLists.findIndex((p) => p.id == id)
    this.kanjiLists.splice(index, 1)
  }

  getAll(): Observable<KanjiList[]> {
    // return this.kanjiLists
    return this.http.get<KanjiList[]>(`${this.baseUrl}/kanjilist`)

  }

  getNewId() {
    return this.kanjiLists[this.kanjiLists.length - 1].id + 1
  }
}
