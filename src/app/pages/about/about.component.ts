import { Component, OnInit } from '@angular/core';
// @ts-ignore
import process = require('process')

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  name?: string
  constructor() { }

  ngOnInit(): void {
    console.log(process.env)
  }

}
