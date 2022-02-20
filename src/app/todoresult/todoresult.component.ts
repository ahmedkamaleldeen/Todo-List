import { Component, OnInit,Output,EventEmitter,Input} from '@angular/core';

@Component({
  selector: 'app-todoresult',
  templateUrl: './todoresult.component.html',
  styleUrls: ['./todoresult.component.css']
})
export class TodoresultComponent implements OnInit {
@Output() todo=new EventEmitter();
@Input() newtodo:any;
// @Input() todo1:any;
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(){

  }
  handle(){
    this.todo.emit()
  }
}
