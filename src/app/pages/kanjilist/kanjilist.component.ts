import { Component, OnInit } from '@angular/core';
import { KANJILISTS } from 'src/app/models/mock.kanji.list';

@Component({
  selector: 'app-kanjilist',
  templateUrl: './kanjilist.component.html',
  styleUrls: ['./kanjilist.component.css']
})
export class KanjilistComponent implements OnInit {
  kanjiLists = KANJILISTS

  constructor() { }

  ngOnInit(): void {
  }

}
