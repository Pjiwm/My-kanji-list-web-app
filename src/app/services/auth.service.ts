import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Router, UrlSegment } from '@angular/router'
import { map, Observable, of } from 'rxjs'
import { User } from '../models/user'
import { ErrorService } from './error.service'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl: string = 'https://mykanjilist-backend.herokuapp.com/api'
  constructor(private http: HttpClient, private router: Router, private errorService: ErrorService) {

  }

  register(email: string, password: string, userName: string) {
    return this.http
      .post<any>(`${this.baseUrl}/register`, { email: email, password: password, userName: userName })
      .subscribe((res) => {
        if (res.token) {
          this.setSession(res)
          this.router.navigate(['../'])
        }
      }, (err) => {
        this.errorService.errorMessage = err.error.error
        this.errorService.showError = true
      })
  }

  login(email: string, password: string) {
    this.http
      .post<any>(`${this.baseUrl}/login`, { email: email, password: password })
      .subscribe((res) => {
        if (res.token) {
          this.setSession(res)
          this.router.navigate(['../'])
        }
      }, (err) => {
        this.errorService.errorMessage = err.error.error
        this.errorService.showError = true
      })

  }

  logout() {
    localStorage.removeItem('token')
    localStorage.removeItem('user_name')
    localStorage.removeItem('user_id')
  }

  isLoggedIn() {
    return localStorage.getItem('token') !== null
  }

  isLoggedOut() {
    return !this.isLoggedIn()
  }

  private setSession(res: any) {
    localStorage.setItem('token', res.token)
    localStorage.setItem('user_name', res.userName)
    localStorage.setItem('user_id', res._id)
    localStorage.setItem('user_email', res.email)
    localStorage.setItem('user_password', res.password)
  }

  getUser(): Observable<User> {
    const user: User = {
      userName: localStorage.getItem('user_name') || "",
      email: localStorage.getItem('user_email') || "",
      id: localStorage.getItem('user_id') || "0",
      password: localStorage.getItem('user_password') || ""
    }
    return of(user)
  }

  public getToken(): string {
    return localStorage.getItem('token') || ""
  }

  public isAuthenticated(): boolean {
    const token = this.getToken()
    return token.length > 1
  }
}
