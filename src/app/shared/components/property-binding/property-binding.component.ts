import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.scss']
})
export class PropertyBindingComponent implements OnInit {
  countries : Array<string> = ["india","usa","japan","uae"];
  businessMan : string[] = ["elon musk" , "jeff" , "mukesh ambani" , "gautam adani"]
  constructor() { }

  ngOnInit(): void {
  }

}
