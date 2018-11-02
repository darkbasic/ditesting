import { Component, OnInit } from '@angular/core';
import { MyValue } from '../../a/my-value';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {

  constructor(public myValue: MyValue) { }

  ngOnInit() {
  }

}
