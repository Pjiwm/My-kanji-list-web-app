import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Guide } from '../models/guide'

@Injectable({
  providedIn: 'root'
})
export class GuideService {
  baseUrl: string = 'https://mykanjilist-backend.herokuapp.com/api'
  constructor(private http: HttpClient) {
    
  }



  postItem(item: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/guide/`, item)
  }


  putItem(item: any, id: any): Observable<Guide> {
    return this.http.put<any>(`${this.baseUrl}/guide/${id}`, item)
  }

  getById(id: number): Observable<Guide> {
    return this.http.get<Guide>(`${this.baseUrl}/guide/${id}`)
  }

  removebyId(id: any) {
    return this.http.delete(`${this.baseUrl}/guide/${id}`)
  }

  getAll(): Observable<Guide[]> {
    return this.http.get<Guide[]>(`${this.baseUrl}/guide`)
  }

  getFromUser(id: any): Observable<Guide[]> {
    return this.http.get<Guide[]>(`${this.baseUrl}/guide/user/${id}`)
  }

  getNewId() {
    return 0
  }
}
