import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {
  message:string;
  randomNumber:number=100;
  constructor() {
     setInterval(()=>{
    let currentDate=new Date(); 

    this.message=currentDate.toDateString()+' '+currentDate.toLocaleTimeString(); 
   });
   }

  ngOnInit() {
  }

  addTwoNumbers(a:number,b:number){
    return a+b;
  }

}
