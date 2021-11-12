import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KanjilistDetailComponent } from './kanjilist-detail.component';

describe('KanjilistDetailComponent', () => {
  let component: KanjilistDetailComponent;
  let fixture: ComponentFixture<KanjilistDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KanjilistDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KanjilistDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
