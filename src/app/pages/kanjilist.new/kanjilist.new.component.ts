import { Component, OnInit } from '@angular/core'
import { NgForm } from '@angular/forms'
import { KanjiList } from 'src/app/models/kanji.list';

@Component({
  selector: 'app-kanjilist.new',
  templateUrl: './kanjilist.new.component.html',
  styleUrls: ['./kanjilist.new.component.css']
})
export class KanjilistNewComponent implements OnInit {
  // kanjiListModel: KanjiList | undefined
  name: string | undefined
  description: string | undefined
  tags: string | undefined
  kanji: string | undefined
  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false
  }

}
