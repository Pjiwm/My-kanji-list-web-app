import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KanjilistNewComponent } from './kanjilist.new.component';

describe('Kanjilist.NewComponent', () => {
  let component: KanjilistNewComponent;
  let fixture: ComponentFixture<KanjilistNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KanjilistNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KanjilistNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
