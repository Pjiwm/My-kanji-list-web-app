import { HttpClient } from "@angular/common/http"
import { TestBed } from "@angular/core/testing"
import { of } from "rxjs"
import { KanjiList } from "../models/kanji.list"
import { KanjiListService } from "./kanji.list.service"

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

describe('KanjiListService', () => {
    let service: KanjiListService
    let httpSpy: jasmine.SpyObj<HttpClient>

    beforeEach(() => {
        httpSpy = jasmine.createSpyObj('HttpClient', ['post', 'get', 'put', 'delete'])

        TestBed.configureTestingModule({
            providers: [{ provide: HttpClient, useValue: httpSpy }]
        })

        service = TestBed.inject(KanjiListService)
        httpSpy = TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>
    })

    it('should be created', () => {
        expect(service).toBeTruthy()
    })
        
    // CREATE
    it('should create a new kanji list wit numbers one to five', (done: DoneFn) => {
        const newKanjiList: KanjiList = oneToFive
        httpSpy.post.and.returnValue(of(oneToFive))
        service.postItem(newKanjiList).subscribe((kanjiList: KanjiList) => {
            expect(oneToFive.id).toEqual(kanjiList.id)
            expect(oneToFive.name).toEqual(kanjiList.name)
            done()
        })
    })

    // READ
    it('should get one kanji list with the days of the week', (done: DoneFn) => {
        httpSpy.get.and.returnValue(of(daysOfWeek))

        service.getById(0).subscribe((kanjilist: KanjiList) => {
            expect(kanjilist.name).toBe("Days")
            expect(kanjilist.kanji.length).toBe(5)
            done()
        })
    })

    // READ
    it('should get multiple kanji lists', (done: DoneFn) => {
        httpSpy.get.and.returnValue(of(multipleKanjiLists))

        service.getAll().subscribe((kanjiLists: KanjiList[]) => {
            expect(kanjiLists.length).toBe(2)
            expect(kanjiLists[0].name).toBe("Days")
            done()
        })
    })

    // UPDATE
    it('should update an existing kanji list', (done: DoneFn) => {
        httpSpy.put.and.returnValue(of(daysOfWeek))

        let newKanjiList: KanjiList = {
            id: daysOfWeek.id, 
            name: "Months of the year", 
            description: daysOfWeek.description,
            kanji: daysOfWeek.kanji,
            tags: daysOfWeek.tags,
            creationDate: daysOfWeek.creationDate
        }

        service.putItem(newKanjiList, newKanjiList.id).subscribe((kanjiList: KanjiList) => {
            expect(kanjiList.name).toEqual(daysOfWeek.name)
            expect(newKanjiList.name).not.toEqual(daysOfWeek.name)
            done()
        })
    })

    // DELETE
    it('should delete an existing kanji list', (done: DoneFn) => {
        httpSpy.delete.and.returnValue(of(oneToFive))

        service.removebyId(oneToFive.id).subscribe((kanjiList: KanjiList) => {
            expect(kanjiList.id).toBe(oneToFive.id)
            expect(kanjiList.kanji[1]).toBe(kanjiList.kanji[1])
            done()
        })
    })
})