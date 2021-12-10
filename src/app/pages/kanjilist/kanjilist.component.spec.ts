import { TestBed } from "@angular/core/testing"
import { KanjilistComponent } from "./kanjilist.component"
import { KanjiListService } from "src/app/services/kanji.list.service"
import { KanjiList } from "src/app/models/kanji.list"
import { AuthService } from "src/app/services/auth.service"
import { of } from "rxjs"

// mock data
const daysOfWeek: KanjiList = {
  id: 0,
  name: "Days",
  description: "These are the days from monday til friday",
  tags: ["days", "friday"],
  kanji: ["月", "火", "水", "木", "金"],
  creationDate: new Date()
}
const oneToFive: KanjiList = {
  id: 1,
  name: "Numbers one to five",
  description: "We count to five with these numbers!",
  tags: ["numbers", "5", "1"],
  kanji: ["一", "二", "三", "四", "五"],
  creationDate: new Date()
}

const multipleKanjiLists: KanjiList[] = [daysOfWeek, oneToFive]

describe('KanjiList table', () => {
  let component: KanjilistComponent
  let kanjiListService: jasmine.SpyObj<KanjiListService>
  let authService: jasmine.SpyObj<AuthService>

  beforeEach(() => {    
    kanjiListService = jasmine.createSpyObj('KanjiListService', ['getAll', 'removebyId', 'putItem', 'postItem'])
    authService = jasmine.createSpyObj('AuthService', ['register', 'login', 'logout', 'getUser'])

    TestBed.configureTestingModule({
      providers: [{ provide: KanjiListService, useValue: kanjiListService }, { provide: AuthService, useValue: authService}]
    })

    component = TestBed.createComponent(KanjilistComponent).componentInstance

    kanjiListService = TestBed.inject(KanjiListService) as jasmine.SpyObj<KanjiListService>
    authService = TestBed.inject(AuthService) as jasmine.SpyObj<AuthService>

  })

  it('should be created', () => {
    expect(component).toBeTruthy()
  })

  // READ
  it('should contain multiple kanji lists', (done: DoneFn) => {
    kanjiListService.getAll.and.returnValue(of(multipleKanjiLists))
    component.ngOnInit()

    expect(component.kanjiLists?.length).toBe(2)
    done()
  })

  
  // UPDATE
  it('should have different data in a kanji list', (done: DoneFn) => {
    const editedKanjiList: KanjiList = {
      id: daysOfWeek.id,
      name: "months of the year",
      kanji: daysOfWeek.kanji,
      creationDate: daysOfWeek.creationDate,
      description: daysOfWeek.description,
      tags: daysOfWeek.tags
    }
    kanjiListService.getAll.and.returnValue(of([editedKanjiList]))
    component.ngOnInit()
    expect(component.kanjiLists[0].name).toBe("months of the year")
    done()
  })

})