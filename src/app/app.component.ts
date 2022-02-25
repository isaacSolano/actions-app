import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'Actions App';
  public toDoItems: any[] = [];

  ngOnInit(): void {
    this.toDoItems = [
      { title: "Cook", isDone: false },
      { title: "Clean Dishes", isDone: false },
      { title: "Get High", isDone: false },
    ];     
  }
}
