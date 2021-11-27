import { TestBed } from "@angular/core/testing"
import { KanjiListService } from "./kanji.list.service"
import { KanjiList } from '../models/kanji.list'

describe('KanjiListService', () => {
    let service: KanjiListService
    beforeEach(() => {
        TestBed.configureTestingModule({})
        service = TestBed.inject(KanjiListService)
        service.kanjiLists = []
        // populate
        service.postItem({
            name: "List1",
            description: "Test description",
            kanji: ["君", "上", "集", "中", "見"],
            tags: ["testing", "test"],
            creationDate: new Date(),
            id: 1
        })
        service.postItem({
            name: "List2",
            description: "Test2 description",
            kanji: ["状", "訓", "僕", "頭", "類"],
            tags: ["testing2", "test2"],
            creationDate: new Date(),
            id: 2
        })
    })

    it('should create the service', () => {
        expect(service).toBeTruthy()
    })
    // CREATE
    it('should create a new kanji list with id 3', () => {
        expect(service.getAll().length).toBe(2)
        const newId = service.getNewId()
        const newList: KanjiList = {
            name: "List1",
            description: "Test2 description",
            kanji: ["状", "訓", "僕", "頭", "類"],
            tags: ["testing2", "test2"],
            creationDate: new Date(),
            id: newId
        }
        service.postItem(newList)
        expect(service.getAll().length).toBe(3)
        expect(service.getById(newId)?.id).toBe(newId)
    })

    // READ
    it('should return all kanji lists', () => {
        expect(service.getAll().length).toBe(2)
    })

    it('should return a kanji list with the id of 1 and a name of List1', () => {
        expect(service.getById(1)?.name).toBe("List1")
        expect(service.getById(1)?.id).toBe(1)
    })

    // UPDATE
    it('should update the name of kanji list with id 1', () => {
        expect(service.getById(1)?.name).toBe('List1')
        const updateId = 1
        const updatedList: KanjiList = {
            name: "List1 - updated",
            description: "Test1 description",
            kanji: ["状", "訓", "僕", "頭", "類"],
            tags: ["testing2", "test2"],
            creationDate: new Date(),
            id: updateId
        }
        service.putItem(updatedList)

        expect(service.getById(updateId)?.name).toBe('List1 - updated')
    })

    it('should not be able to update a non existing list', () => {
        const unKnownId = 10
        const updatedList: KanjiList = {
            name: "List1 - updated",
            description: "Test1 description",
            kanji: ["状", "訓", "僕", "頭", "類"],
            tags: ["testing2", "test2"],
            creationDate: new Date(),
            id: unKnownId
        }
        service.putItem(updatedList)
        expect(service.getById(unKnownId)).toBe(undefined)
    })

    // DELETE
    it('should delete the kanji list with id 1', () => {
        service.removebyId(1)
        expect(service.getById(1)).toBe(undefined)
        expect(service.getAll().length).toBe(1)
    })
})