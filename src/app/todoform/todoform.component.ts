import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todoform',
  templateUrl: './todoform.component.html',
  styleUrls: ['./todoform.component.css']
})
export class TodoformComponent implements OnInit {
  // name:string="ahmed"
  TODO :any=[]
  // newtodo:any
  constructor() { }

  ngOnInit(): void {
  }
  todoresult(value:any){
    // var input= document.getElementById("input").va;
    // this.TODO.push(this.newtodo);
    // console.log(this.TODO)
    console.log(value);
    this.TODO.push(value);

  }
  // addItem(description: string) {
  //   this.TODO.push({
  //     description,
  //     done: false
  //   });
  // }

}
