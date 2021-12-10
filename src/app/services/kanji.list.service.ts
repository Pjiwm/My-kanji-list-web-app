import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { KanjiList } from '../models/kanji.list'

@Injectable({
  providedIn: 'root'
})
export class KanjiListService {
 
  baseUrl: string = 'https://mykanjilist-backend.herokuapp.com/api'
  httpOptions: any = {
    'Content-Type': 'application/json',
  }

  constructor(private http: HttpClient) {
    
  }

  postItem(item: KanjiList):Observable<KanjiList> {
    return this.http.post<any>(`${this.baseUrl}/kanjilist/`, item)
  }

  putItem(item: KanjiList, id: any): Observable<KanjiList> {
    return this.http.put<any>(`${this.baseUrl}/kanjilist/${id}`, item)
  }

  getById(id?: number): Observable<KanjiList> {
    return this.http.get<KanjiList>(`${this.baseUrl}/kanjilist/${id}`)
  }

  removebyId(id: number): Observable<KanjiList> {
    return this.http.delete<KanjiList>(`${this.baseUrl}/kanjilist/${id}`)
  }

  getAll(): Observable<KanjiList[]> {
    return this.http.get<KanjiList[]>(`${this.baseUrl}/kanjilist`)
  }

  getFromUser(id: any): Observable<KanjiList[]> {
    return this.http.get<KanjiList[]>(`${this.baseUrl}/kanjilist/user/${id}`)
  }

  getNewId() {
    return 0
  }
}
