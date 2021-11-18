import { Component, OnInit } from '@angular/core'

// @ts-ignore
import Typewriter from 't-writer.js'
// @ts-ignore
import Kanji from 'kanji.js'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const characterList: string[] = this.getRandomKanji()
    const target = document.querySelector('.japanese-tw')
    const options = {
      loop: true,
      animateCursor: true,

      blinkSpeed: 400,

      typeSpeed: 500,
      deleteSpeed: 500,

      typeSpeedMin: 65,
      typeSpeedMax: 115,

      deleteSpeedMin: 40,
      deleteSpeedMax: 90,

      typeClass: 'type-span',
      cursorClass: 'cursor-span',

      typeColor: 'white',
      cursorColor: 'white'
    }

    const writer = new Typewriter(target, options)
    writer
      .strings(
        800,
        ...characterList
      )
      .start()
  }

  private getRandomKanji(): string[] {
    let characterList: any[] = []
    const start = Math.floor(Math.random() * (800 - 0 + 1)) + 0
    for (let i = 0; i < 100; i++) {
      const step = Math.floor(Math.random() * (50 - 0 + 1)) + 0
      characterList.push(Kanji.dump()[start + step].literal)
    }
    return characterList
  }



}
