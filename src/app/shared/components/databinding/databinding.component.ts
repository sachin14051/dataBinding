import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.scss']
})
export class DatabindingComponent implements OnInit {
    fname:string= "jhon";
    lname:string = "doe";
    nativePlace : string = 'pune';
    skills:Array<string> = ["html","css","javascript","bootstrap","typescript","angular"];
    contact : number = 789456123


  constructor() {
    
   }



  ngOnInit(): void {
  }

}
