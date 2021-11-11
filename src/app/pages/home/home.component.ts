import { Component, OnInit } from '@angular/core';
// @ts-ignore
import Typewriter from 't-writer.js'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    const target = document.querySelector('.japanese-tw')
    const options = {
      loop: true,
      animateCursor: true,
    
      blinkSpeed: 400,
    
      typeSpeed: 300,
      deleteSpeed: 340,
    
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
        "今日",
        "漢字", 
        "命",
        "学",
        "本質",
        "刑部",
        "物知",
        "考",
        "本",
        "覚",
        "翻訳",
        "頭",
        "勉強",
        "脳",
        "図書館"
      )
      .start()
  }

  

}
