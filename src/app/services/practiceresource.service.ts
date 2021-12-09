import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { PracticeResource } from '../models/practice.resource'

@Injectable({
  providedIn: 'root'
})
export class PracticeresourceService {
  baseUrl: string = 'https://mykanjilist-backend.herokuapp.com/api'

  constructor(private http: HttpClient) { }

  postItem(item: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/practiceresource/`, item)
  }


  putItem(item: any, id: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/practiceresource/${id}`, item)
  }

  getById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/practiceresource/${id}`)
  }

  removebyId(id: any) {
    return this.http.delete(`${this.baseUrl}/practiceresource/${id}`)
  }

  getFromUser(id: any): Observable<PracticeResource[]> {
    return this.http.get<PracticeResource[]>(`${this.baseUrl}/practiceresource/user/${id}`)
  }

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/practiceresource`)
  }

}
