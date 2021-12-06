import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { User } from '../models/user'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl: string = 'https://mykanjilist-backend.herokuapp.com/api'
  constructor(private http: HttpClient, private router: Router) {

  }

  register(user: User) {
    console.log(user)
    return this.http
      .post<any>(`${this.baseUrl}/register`, user)
      .subscribe((res) => {
        if (res.token) {
          this.setSession(res)
          this.router.navigate(['/'])
        } else {
          //  TODO error handling in auth register
        }
      })
  }

  login(email: string, password: string) {
    this.http
    .post<any>(`${this.baseUrl}/login`, {email: email, password: password})
    .subscribe((res) => {
      if(res.token) {
        this.setSession(res)
        this.router.navigate(['/'])
      } else {
        // TODO error handling in auth login
      }
    })
  }

  logout() {
    localStorage.removeItem('id_token')
  }

  isLoggedIn() {
    return localStorage.getItem('id_token') !== undefined
  }

  isLoggedOut() {
    return !this.isLoggedIn()
  }

  private setSession(res: any) {
    localStorage.setItem('token', res.token)
    localStorage.setItem('user_name', res.token)
    localStorage.setItem('user_id', res._id)
  }
}
