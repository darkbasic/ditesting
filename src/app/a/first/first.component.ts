import { Component, OnInit } from '@angular/core';
import { MyValue } from '../my-value';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  constructor(public myValue: MyValue) { }

  ngOnInit() {
  }

}
