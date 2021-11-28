import { Injectable } from '@angular/core'
import { Guide } from '../models/guide'

@Injectable({
  providedIn: 'root'
})
export class GuideService {
  private guides: Guide[]
  constructor() {
    this.guides = [
      {
        id: 1,
        title: 'My sample guide',
        content: "lorem\nloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem"
          + "\nloremloremloremloremloremloremloremloremloremloremloremlorem"
          + "loremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem\n"
          + "loremloremloremloremloremloremloremloremloremloremloremloremloremloremlo"
          + "remloremloremloremloremloremloremloremloremloremlorem\n",
        tags: ['numbers', '1st grade', 'easy'],
        creationDate: new Date("2020-01-16"),
        kanjiListId: 2
      },
      {
        id: 2,
        title: 'My sample guide',
        content: "test",
        tags: ['numbers', '1st grade', 'easy'],
        creationDate: new Date("2020-01-16"),
      },
      {
        id: 3,
        title: 'My sample guide',
        content: "test",
        tags: ['numbers', '1st grade', 'easy'],
        creationDate: new Date("2020-01-16"),
        kanjiListId: 3
      },
      {
        id: 4,
        title: 'My sample guide',
        content: "test",
        tags: ['numbers', '1st grade', 'easy'],
        creationDate: new Date("2020-01-16"),
        kanjiListId: 5
      },
      {
        id: 5,
        title: 'My sample guide',
        content: "test",
        tags: ['numbers', '1st grade', 'easy'],
        creationDate: new Date("2020-01-16"),
        kanjiListId: 2
      },
      {
        id: 6,
        title: 'My sample guide',
        content: "test",
        tags: ['numbers', '1st grade', 'easy'],
        creationDate: new Date("2020-01-16"),
        kanjiListId: 4
      }
    ]
  }



  postItem(item: Guide) {
    this.guides.push(item)
  }

  putItem(item: Guide) {
    const index = this.guides.findIndex((p) => p.id == item.id)
    this.guides[index] = item
  }

  getById(id: number) {
    return this.guides.find((p) => p.id == id)
  }

  removebyId(id: number) {
    const index = this.guides.findIndex((p) => p.id == id)
    this.guides.splice(index, 1)
  }

  getAll() {
    return this.guides
  }

  getNewId() {
    return this.guides[this.guides.length - 1].id + 1
  }
}
