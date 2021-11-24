import { Injectable } from '@angular/core';
import { Guide } from '../models/guide'

@Injectable({
  providedIn: 'root'
})
export class GuideServiceService {
  private guides: Guide[]
  constructor() {
    this.guides = [
      {
        id: 1,
        title: 'My sample guide',
        content: "test",
        tags: ['numbers', '1st grade', 'easy'],
        creationDate: new Date("2020-01-16")
      },
      {
        id: 2,
        title: 'My sample guide',
        content: "test",
        tags: ['numbers', '1st grade', 'easy'],
        creationDate: new Date("2020-01-16")
      },
      {
        id: 3,
        title: 'My sample guide',
        content: "test",
        tags: ['numbers', '1st grade', 'easy'],
        creationDate: new Date("2020-01-16")
      },
      {
        id: 4,
        title: 'My sample guide',
        content: "test",
        tags: ['numbers', '1st grade', 'easy'],
        creationDate: new Date("2020-01-16")
      },
      {
        id: 5,
        title: 'My sample guide',
        content: "test",
        tags: ['numbers', '1st grade', 'easy'],
        creationDate: new Date("2020-01-16")
      },
      {
        id: 6,
        title: 'My sample guide',
        content: "test",
        tags: ['numbers', '1st grade', 'easy'],
        creationDate: new Date("2020-01-16")
      }
    ]
  }



  setOption(id: number, value: any) {
    this.guides[id] = value
  }

  pushItem(item: Guide) {
    // this.kanjiLists.push(item)
    // API call to add
  }

  editItem(item: Guide) {
    // API call to edit
  }

  getForId(id: number) {
    return this.guides[id - 1]
  }

  getOption() {
    return this.guides
  }
}
