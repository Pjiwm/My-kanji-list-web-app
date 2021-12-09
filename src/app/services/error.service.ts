import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
    public showError: boolean = false;
    public errorMessage: string = 'Something unexpected went wrong! Try again later';
    public message: string = 'Something unexpected went wrong! Try again later';
  
    constructor() { }
  
    setDefault() {
      this.showError = false;
      this.errorMessage = this.message;
    }
  
  }
