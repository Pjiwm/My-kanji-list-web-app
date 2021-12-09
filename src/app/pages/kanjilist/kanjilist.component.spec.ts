import { ComponentFixture, TestBed } from "@angular/core/testing"
import { KanjilistComponent } from "./kanjilist.component"
import { KanjiListService } from "src/app/services/kanji.list.service"
import { KanjiList } from "src/app/models/kanji.list"
import { ActivatedRoute } from "@angular/router"
import { RouterTestingModule } from "@angular/router/testing"


// describe('AboutComponent', () => {
//   let component: KanjilistComponent
//   let fixture: ComponentFixture<KanjilistComponent>

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [KanjilistComponent],
//       imports: [RouterTestingModule]
//     })
//       .compileComponents()
//   })

//   beforeEach(() => {
//     fixture = TestBed.createComponent(KanjilistComponent)
//     component = fixture.componentInstance
//     fixture.detectChanges()
//   })

//   it('should create', () => {
//     expect(component).toBeTruthy()
//   })

//   it('should contain values from a kanji list', async () => {
//     component.ngOnInit()
//     component.kanjiLists = []
//     expect(component.kanjiLists.length).toBe(0)
//     const listName = 'new'
//     component.kanjiLists.push({
//       name: listName,
//       description: 'new test component',
//       kanji: ['所', '画', '描', '付', '会', '試', '健'],
//       tags: ['interesting', 'new'],
//       creationDate: new Date(),
//       id: 1
//     })
//     expect(component.kanjiLists.length).toBe(1)
//     expect(component.kanjiLists[0].name).toBe(listName)

//   })
// })

