import { ComponentFixture, TestBed } from "@angular/core/testing"
import { KanjilistDetailComponent } from "./kanjilist.detail.component"
import { KanjiListService } from "src/app/services/kanji.list.service"
import { KanjiList } from "src/app/models/kanji.list"
import { ActivatedRoute } from "@angular/router"


describe('KanjiList details', async () => {
    let component: ComponentFixture<KanjilistDetailComponent>
    let service: KanjiListService

    beforeEach(async () => {
        TestBed.configureTestingModule({
            declarations: [KanjilistDetailComponent, ActivatedRoute]
        }).compileComponents()
        component = TestBed.createComponent(KanjilistDetailComponent)
        service = TestBed.inject(KanjiListService)
    })

    fit('should be created', () => {
        expect(component).toBeTruthy()
    })
})