import { TestBed } from '@angular/core/testing';

import { Kanji.ListService } from './kanji.list.service';

describe('Kanji.ListService', () => {
  let service: Kanji.ListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Kanji.ListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
