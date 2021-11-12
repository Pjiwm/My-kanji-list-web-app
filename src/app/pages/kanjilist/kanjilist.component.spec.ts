import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KanjilistComponent } from './kanjilist.component';

describe('KanjilistComponent', () => {
  let component: KanjilistComponent;
  let fixture: ComponentFixture<KanjilistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KanjilistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KanjilistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
